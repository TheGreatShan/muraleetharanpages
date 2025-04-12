"use client"

import Link from "next/link";


export default function Nav() {


    return (
        <div className={"bg-[#e7e5e4] text-black font-sans p-10 backdrop-blur-sm select-none"}>
            <Link href={"/"} className={"fixed left-0 md:ml-[100px] ml-[50px] md:visible invisible"}>
                <h1 className={"md:text-2xl text-sm font-serif"}>Shansai</h1>
                <h1 className={"md:text-3xl text-sm font-serif"}>Muraleetharan</h1>
            </Link>
            <div className={"fixed md:right-0 flex"}>
                <Link href={"/"} title={"Home"} className={"mr-10 md:invisible visible"}>Home</Link>
                <Link href={"/about"} title={"About"} className={"mr-10"}>About</Link>
                <Link href={"/career"} title={"Career"} className={"mr-10"}>Career</Link>
            </div>
        </div>
    )
}