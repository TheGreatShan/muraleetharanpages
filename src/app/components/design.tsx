import Nav from "muralee/app/components/Nav";
import React from "react";

export default function Design({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className={"border-solid border-[7px] border-black bg-[#e7e5e4] text-black font-libre h-full"}>
                <Nav/>
                <div className={"p-10"}>
                    {children}
                </div>
            </div>
        </>
    )
}