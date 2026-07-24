import { Metadata } from "next";

import { LandingPage } from "@/templates/landing-page";

export const metadata: Metadata = {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar'
}

export default function HomePage() {
    return (
        <LandingPage />
    )
}