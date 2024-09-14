import Link from "next/link";

export default function Nav() {
    return (
        <div className={"bg-[#e7e5e4] text-black font-libre p-10"}>
            <div className={"fixed left-0 ml-[100px]"}>
                <h1 className={"text-2xl"}>Shansai</h1>
                <h1 className={"text-3xl"}>Muraleetharan</h1>
            </div>
            <div className={"fixed right-0 mx-10"}>
                <Link href={"/"} title={"Home"} className={"mx-10"}>Home</Link>
                <Link href={"/about"} title={"About"}>About</Link>
            </div>
        </div>
    )
}