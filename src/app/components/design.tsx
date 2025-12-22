"use client"

import Nav from "muralee/app/components/Nav";
import React from "react";
import { useState, useEffect } from "react";
import NeuralNetworkBackground from "./neuralnetwork";


export default function Design({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div
                className={"border-solid font-serif border-[7px] border-info-content bg-primary-content min-h-screen w-screen h-full flex grow"}>
                    <NeuralNetworkBackground actionable={false} />
                <div
                    className={"bg-base-200 text-white font-libre w-screen min-h-full"}>
                    <Nav/>
                    <div className={"md:p-10 font-sans"}>
                        {children}
                    </div>
                    <div className="hidden md:block fixed bottom-0 left-0 ml-10 mb-10 text-xs select-none">
                        <h1 className="font-bold">&copy; {new Date().getFullYear() > 2025 && `2025 -`} {new Date().getFullYear()} Shansai Muraleetharan</h1>
                    </div>
                </div>
            </div>
        </>
    )
}