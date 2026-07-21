type AvatartitleProps = {
    children: React.ReactNode
}

export const AvatarTitle = ({ children } : AvatartitleProps) => {
    return (
        <strong className="text-body-sm text-gray-200">
            {children}
        </strong>
    )
}