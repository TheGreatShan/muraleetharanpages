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
                className={"border-solid border-[7px] border-white bg-[#e7e5e4] min-h-screen w-screen h-full flex flex-grow"}>
                <div
                    className={"border-solid border-[7px] border-black bg-[#e7e5e4] text-black font-libre w-screen min-h-full"}>
                    <Nav/>
                    <div className={"md:p-10"}>
                        {children}
                    </div>
                    <div className={"fixed bottom-0 right-0 font-bold mr-10 mb-10"}>
                        <h1>
                            {ctime}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}