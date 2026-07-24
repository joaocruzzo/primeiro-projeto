'use client'

import { useShare } from "@/hooks"

import { Button } from "@/components/ui/button"

type PostShareMobileProps = {
    url: string
    title: string
    description: string
}

export const PostShareMobile = ({ description, title, url }: PostShareMobileProps) => {
    const { shareButtons } = useShare({
        url, title, text: description
    })

    return (
        <aside className="space-y-6 lg:hidden">
            <div className="rounded-lg bg-gray-700">
                <div className="flex gap-2 justify-end">
                    {shareButtons.map((provider) => (
                        <Button
                            key={provider.provider}
                            onClick={() => provider.action()}

                            className="py-6"
                            variant="outline"
                        >
                            {provider.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}