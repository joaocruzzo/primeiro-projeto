'use client'

import { useShare } from "@/hooks"

import { Button } from "@/components/ui/button"

type PostShareDesktopProps = {
    url: string
    title: string
    description: string
}

export const PostShareDesktop = ({ description, title, url }: PostShareDesktopProps) => {
    const { shareButtons } = useShare({
        url, title, text: description
    })

    return (
        <aside className="space-y-6 hidden lg:block">
            <div className="rounded-lg bg-gray-700">
                <h2 className="mb-4 text-heading-xs text-gray-100">
                    Compartilhar
                </h2>

                <div className="space-y-3">
                    {shareButtons.map((provider) => (
                        <Button
                            key={provider.provider}
                            onClick={() => provider.action()}

                            variant="outline"
                            className="w-full justify-start gap-2"
                        >
                            {provider.icon}
                            {provider.name}
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}