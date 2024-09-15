import Nav from "muralee/app/components/Nav";
import React from "react";

export default function Design({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className={"border-solid border-[7px] border-white bg-[#e7e5e4] min-h-screen h-full flex flex-grow"}>
                <div
                    className={"border-solid border-[7px] border-black bg-[#e7e5e4] text-black font-libre min-h-screen h-full"}>
                    <Nav/>
                    <div className={"md:p-10"}>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}