"use client"

import Link from "next/link";


export default function Nav() {


    return (
        <div className={"bg-[#e7e5e4] text-black font-libre p-10 backdrop-blur-sm select-none"}>
            <div className={"fixed left-0 md:ml-[100px] ml-[50px] md:visible invisible"}>
                <h1 className={"md:text-2xl text-sm"}>Shansai</h1>
                <h1 className={"md:text-3xl text-sm"}>Muraleetharan</h1>
            </div>
            <div className={"fixed right-0 mx-10"}>
                <Link href={"/"} title={"Home"} className={"mr-10"}>Home</Link>
                <Link href={"/about"} title={"About"} className={"mr-10"}>About</Link>
                <Link href={"/career"} title={"Career"} className={"mr-10"}>Career</Link>
                <Link href={"/ssbd"} title={"SSBD"} className={"mr-10"}>SSBD - Time</Link>
            </div>
        </div>
    )
}