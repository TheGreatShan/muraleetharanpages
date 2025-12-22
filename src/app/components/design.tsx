"use client"

import Nav from "muralee/app/components/Nav";
import React from "react";
import { useState, useEffect } from "react";


export default function Design({children}: Readonly<{ children: React.ReactNode; }>) {
    const [ctime, setTime] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div
                className={"border-solid font-serif border-[7px] border-info-content bg-primary-content min-h-screen w-screen h-full flex grow"}>
                <div
                    className={"bg-base-100 text-white font-libre w-screen min-h-full"}>
                    <Nav/>
                    <div className={"md:p-10 font-sans"}>
                        {children}
                    </div>
                        <div className="hidden md:block fixed bottom-0 left-0 ml-10 mb-10 text-xs select-none">
                            <h1 className="font-bold">&copy; {new Date().getFullYear() > 2025 && `2025 -`} {new Date().getFullYear()} Shansai Muraleetharan</h1>
                        </div>
                        <div className={"fixed bottom-0 right-0 text-2xl font-bold mr-10 mb-10 select-none"}>
                        {
                            ctime == "" 
                            ? <span className="loading loading-dots loading-xs"></span>
                            : <h1>{ctime}</h1>
                        }
                        </div>
                </div>
            </div>
        </>
    )
}