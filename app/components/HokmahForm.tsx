'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLeadForm } from '../../hooks/useLeadForm'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

interface HokmahFormProps {
    formId?: string
    submitText?: string
    message?: string
    redirectUrl?: string
    apiUrl?: string
}

export default function HokmahForm({
    formId = 'lead-form',
    submitText = 'Quero mais informações',
    message,
    redirectUrl = '/obrigado',
    apiUrl = '/api/keyspot'
}: HokmahFormProps) {
    // Generate default message if not provided
    const defaultMessage = typeof document !== 'undefined' 
        ? `Lead captado via ${document.title}` 
        : 'Lead captado via Landing Page Hokmah'

    const {
        name, setName,
        email, setEmail,
        phone, setPhone,
        status, errorMsg,
        handleSubmit
    } = useLeadForm({ 
        message: message || defaultMessage,
        endpoint: apiUrl 
    })

    const router = useRouter()

    // Pré-carrega a página de obrigado para que o redirecionamento seja instantâneo
    useEffect(() => {
        if (redirectUrl) {
            router.prefetch(redirectUrl)
        }
    }, [router, redirectUrl])

    const handleOptimisticSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Dispara a requisição para o CRM e espera ela terminar
        const success = await handleSubmit(e)
        
        // Redireciona APENAS se o lead foi salvo com sucesso
        if (success && redirectUrl) {
            router.push(redirectUrl)
        }
    }

    return (
        <form id={formId} noValidate onSubmit={handleOptimisticSubmit}>
                <div className={`form-group ${status === 'error' && !name.trim() ? 'has-error' : ''}`}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome Completo"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={status === 'loading'}
                    />
                </div>
                <div className={`form-group ${status === 'error' && !email.trim() ? 'has-error' : ''}`}>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                    />
                </div>
                <div className={`form-group ${status === 'error' && (!phone || !isValidPhoneNumber(phone)) ? 'has-error' : ''}`}>
                    <PhoneInput
                        international
                        defaultCountry="BR"
                        name="phone"
                        placeholder="WhatsApp / Telefone"
                        value={phone}
                        onChange={(value) => setPhone(value ? value : '')}
                        disabled={status === 'loading'}
                        className="phone-input-container"
                    />
                </div>

                {status === 'error' && errorMsg && (
                    <div className="error-msg" style={{ display: 'block', marginBottom: '1rem' }}>
                        {errorMsg}
                    </div>
                )}

                <button 
                    type="submit" 
                    className="btn-cta" 
                >
                    {submitText}
                </button>
        </form>
    )
}
