import "@/styles/globals.css";

import { Metadata } from "next";

import { Layout } from "@/components/layout"

export const metadata: Metadata = {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',

    robots: 'index, follow',
    
    icons: {
        icon: './small-logo.svg',
    },

    openGraph: {
        title: 'Site.set',
        description: 'Venda seus produtos como afiliado em um único lugar',

        url: 'https://site-set-phi.vercel.app/og-image.jpg',
        siteName: 'Site.set',
        locale: 'pt_BR',
        type: 'website',

        images: [{
            width: 800,
            height: 600,
            url: 'https://site-set-phi.vercel.app/og-image.jpg',
            alt: 'Site.set'
        }]
    }
}

export default function RootLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    )
}