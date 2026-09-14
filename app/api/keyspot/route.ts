import { NextResponse } from "next/server";

// Cache global do token para não precisar autenticar em TODO lead
let cachedToken: string | null = null;
let tokenExpiryTime: number = 0;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message, utms, source_url } = body;

        // 1. Validar campos obrigatórios
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Campos obrigatórios ausentes (nome, email, telefone)" },
                { status: 400 }
            );
        }

        const apiKey = process.env.KEYSPOT_API_KEY;
        const apiSecret = process.env.KEYSPOT_API_SECRET;
        const baseUrl =
            process.env.KEYSPOT_BASE_URL || "https://partner-api.keyspot.com.br";

        if (!apiKey || !apiSecret) {
            console.error("Configuração de API da Keyspot ausente no ambiente");
            return NextResponse.json(
                { error: "Erro de configuração no servidor" },
                { status: 500 }
            );
        }

        // 2. Autenticação via headers (X-API-Key / X-API-Secret) com CACHE
        let token = cachedToken;
        
        if (!token || Date.now() > tokenExpiryTime) {
            const authResponse = await fetch(`${baseUrl}/v1/auth/token`, {
                method: "POST",
                headers: {
                    "X-API-Key": apiKey,
                    "X-API-Secret": apiSecret,
                },
            });

            if (!authResponse.ok) {
                const errorData = await authResponse.json().catch(() => ({}));
                console.error("Erro na autenticação Keyspot:", errorData);
                return NextResponse.json(
                    { error: "Falha na autenticação com o CRM" },
                    { status: 502 }
                );
            }

            const authJson = await authResponse.json();
            token = authJson.data.token;
            cachedToken = token;
            // Keyspot tokens normally last 1 hour, we refresh at 50 mins
            tokenExpiryTime = Date.now() + 50 * 60 * 1000; 
        }

        // 3. Enviar lead para Keyspot (/v1/leads)
        const leadPayload: Record<string, unknown> = {
            name,
            email,
            phone,
            source: "LANDING_PAGE",
            operationType: "SALE",
            ...(message && { message }),
            ...(source_url && { source_url }),
            ...(utms || {}),
        };

        const leadResponse = await fetch(`${baseUrl}/v1/leads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(leadPayload),
        });

        if (!leadResponse.ok) {
            const errorData = await leadResponse.json().catch(() => ({}));
            console.error("Erro ao criar lead na Keyspot:", errorData);
            return NextResponse.json(
                { error: "Erro ao registrar lead no CRM" },
                { status: 502 }
            );
        }

        const leadData = await leadResponse.json();
        return NextResponse.json({
            success: true,
            message: "Lead capturado com sucesso",
            leadId: leadData.data?.id,
        });
    } catch (error) {
        console.error("Erro interno na rota /api/leads:", error);
        return NextResponse.json(
            { error: "Erro interno no servidor" },
            { status: 500 }
        );
    }
}
