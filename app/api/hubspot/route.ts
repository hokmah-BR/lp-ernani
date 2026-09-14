import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message, utms, source_url } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Campos obrigatórios ausentes" },
                { status: 400 }
            );
        }

        // Roteamento de Inteligência: Separa os leads por cliente/projeto
        let token = process.env.HUBSPOT_HOKMAH_TOKEN; // Default: CRM da Hokmah (Lagom Perequê)

        if (source_url && source_url.includes("desmanchebar")) {
            token = process.env.HUBSPOT_ACCESS_TOKEN; // CRM do Cliente (Desmanche Bar)
        }

        if (!token) {
            console.error("Token do HubSpot não configurado para esta rota.");
            return NextResponse.json({ error: "Erro de configuração do servidor" }, { status: 500 });
        }

        // Dividir nome em firstName e lastName para o HubSpot
        const nameParts = name.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        const leadPayload = {
            properties: {
                email: email.trim(),
                firstname: firstName,
                lastname: lastName,
                phone: phone.trim(),
                // Propriedades customizadas mapeadas via UTMs
                ...(utms?.utm_source && { origem: utms.utm_source }),
                ...(utms?.utm_content && { utm_content: utms.utm_content })
            }
        };

        const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(leadPayload)
        });

        // Se o contato já existir (409 Conflict)
        if (response.status === 409) {
             return NextResponse.json({
                success: true,
                message: "Lead já cadastrado no HubSpot"
            });
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Erro HubSpot:", errorData);
            return NextResponse.json(
                { error: "Erro ao registrar lead no HubSpot" },
                { status: 502 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Lead enviado ao HubSpot com sucesso"
        });

    } catch (error) {
        console.error("Erro interno HubSpot:", error);
        return NextResponse.json(
            { error: "Erro interno no servidor" },
            { status: 500 }
        );
    }
}
