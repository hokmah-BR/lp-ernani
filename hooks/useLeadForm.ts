"use client"

import { useState, type FormEvent } from "react"

export type FormStatus = "idle" | "loading" | "success" | "error"

export interface LeadFormData {
    name: string
    email: string
    phone: string
}

export interface UseLeadFormOptions {
    /** Mensagem personalizada enviada junto ao lead (ex: "Lead via página Quem Somos") */
    message?: string
    /** URL da API para envio (ex: "/api/keyspot" ou "/api/hubspot") */
    endpoint?: string
}

function getUtmsFromUrl(): Record<string, string> {
    if (typeof window === "undefined") return {}
    const params = new URLSearchParams(window.location.search)
    const utms: Record<string, string> = {}
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    keys.forEach((key) => {
        const val = params.get(key)
        if (val) utms[key] = val
    })
    return utms
}

export function useLeadForm(options?: UseLeadFormOptions) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [status, setStatus] = useState<FormStatus>("idle")
    const [errorMsg, setErrorMsg] = useState("")

    async function handleSubmit(e: FormEvent): Promise<boolean> {
        e.preventDefault()

        if (!name.trim() || !email.trim() || !phone.trim()) {
            setStatus("error")
            setErrorMsg("Preencha todos os campos.")
            return false
        }

        if (name.trim().split(/\s+/).length < 2) {
            setStatus("error")
            setErrorMsg("Por favor, informe seu nome e sobrenome.")
            return false
        }

        setStatus("loading")
        setErrorMsg("")

        try {
            const res = await fetch(options?.endpoint || "/api/keyspot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    message: options?.message || "Lead captado via Landing Page Hokmah",
                    source_url: typeof window !== "undefined" ? window.location.href : "",
                    utms: getUtmsFromUrl(),
                }),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.error || "Erro ao enviar formulário")
            }

            setStatus("success")
            setName("")
            setEmail("")
            setPhone("")
            return true
        } catch (err) {
            setStatus("error")
            setErrorMsg(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.")
            return false
        }
    }

    function reset() {
        setStatus("idle")
        setErrorMsg("")
    }

    return {
        name, setName,
        email, setEmail,
        phone, setPhone,
        status, errorMsg,
        handleSubmit,
        reset,
    }
}
