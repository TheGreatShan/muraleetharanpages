type HeaderProps = {
    title: string
}
export default function Header({title}: HeaderProps) {
    return (
        <div>
            <h1 className="text-6xl font-serif font-bold mx-[50px]">{title}</h1>
        </div>
    )
}