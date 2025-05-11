"use client"

import Link from "next/link";


export default function Nav() {


    return (
        <div className="navbar bg-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#f8f8f8] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={"/"} title={"Home"} >Home</Link></li>
                        <li><Link href={"/about"} title={"About"}>About</Link></li>
                        <li><Link href={"/career"} title={"Career"}>Career</Link></li>
                </ul>
                </div>
                <div className="pl-5 md:navbar-start sm:navbar-center">
                    <Link href="/">
                        <h1 className={"md:text-xl text-xs font-serif font-bold"}>Shansai Muraleetharan</h1>
                    </Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/about"} title={"About"} className={"btn btn-ghost mr-10"}>About</Link></li>
                    <li><Link href={"/career"} title={"Career"} className={"btn btn-ghost mr-10"}>Career</Link></li>
                </ul>
            </div>
        </div>
    )
}