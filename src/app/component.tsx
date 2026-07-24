'use client'

import { useEffect } from "react"

export const ErrorComponent = () => {
    useEffect(() => {
        throw new Error('Componente lançando erro')
    }, [])

    return (
        <h2>componente de erro</h2>
    )
}