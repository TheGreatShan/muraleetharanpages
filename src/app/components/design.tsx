import Nav from "muralee/app/components/Nav";

export default function Design({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className={"border-solid border-[7px] border-black bg-[#e7e5e4] text-black font-libre"}>
                <Nav/>

                <div className={"h-screen p-10"}>
                    {children}
                </div>
            </div>
        </>
    )
}