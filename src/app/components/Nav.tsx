import Link from "next/link";

export default function Nav() {
    return (
        <div className={"bg-[#e7e5e4] text-black font-libre p-10"}>
            <div className={"fixed left-0 md:ml-[100px] ml-[50px]"}>
                <h1 className={"md:text-2xl text-sm"}>Shansai</h1>
                <h1 className={"md:text-3xl text-sm"}>Muraleetharan</h1>
            </div>
            <div className={"fixed right-0 mx-10"}>
                <Link href={"/"} title={"Home"} className={"mx-10"}>Home</Link>
                <Link href={"/about"} title={"About"}>About</Link>
            </div>
        </div>
    )
}