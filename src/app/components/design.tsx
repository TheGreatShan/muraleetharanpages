export default function Design({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={"bg-[#e7e5e4] h-screen text-black font-libre border-solid border-[7px] p-10 border-black"}>
            {children}
        </div>
    )
}