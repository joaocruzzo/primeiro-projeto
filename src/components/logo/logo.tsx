import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return (
        <Link href="/" title="Página inicial">
            <Image
                src="/main-logo.svg"
                alt="Logo principal"

                width={116}
                height={32}
            />
        </Link>
    )
}