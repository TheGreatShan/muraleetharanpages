"use client"

import {SocialIcon} from "react-social-icons";
import Link from "next/link";
import Head from 'next/head';
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    const [ctime, setTime] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Head>
                <meta name={"description"} content="Shansai Muraleetharan Portfolio" key="titleDescription"/>
                <meta name={"keywords"}
                      content="Shansai, Muraleetharan, Shansai Muraleetharan, TheGreatShan, Shansai Linkedin, Shansai Muraleetharan Linkedin, Muraleetharan Linkedin"
                      key="titleKeywords"/>
            </Head>
                <div
                    className="content-center bg-base-100 h-screen h-full text-white font-sans border-solid border-[7px] p-10 border-info-content">
                    <div className={"fixed top-0 left-0 font-bold ml-10 mt-10 text-[30px]"}>
                        {
                            ctime == "" 
                            ? <span className="loading loading-dots loading-xs"></span>
                            : <h1>{ctime}</h1>
                        }
                    </div>
                    <TypeAnimation
                        sequence={[
                            'Shansai Muraleetharan',
                            2000,
                            'C# Developer',
                            2000,
                            'CS Student @ ZHAW',
                            2000,
                            'Startup @ AnyWell',
                            2000,
                        ]}
                        repeat={Infinity}
                        className="text-2xl md:text-5xl font-serif"
                        />
                    <div className={"mt-4 md:flex mx-auto"}>
                        <div>
                            <SocialIcon network={"linkedin"} url={"https://www.linkedin.com/in/shansai-muraleetharan"}
                                        bgColor={"black"} className={"mr-2"}/>
                            <SocialIcon network={"github"} url={"https://github.com/TheGreatShan"}
                                        bgColor={"black"} className={"mr-2"}/>
                        </div>
                        <div className="mt-5 sm:my-auto">
                            <Link href={"/about"} className={"text-white bg-black py-4 px-3 rounded-full mr-2"}>About</Link>
                            <Link href={"/career"} className={"text-white bg-black py-4 px-3 rounded-full mr-2"}>Career</Link>
                        </div>
                    </div>
                </div>
            <div className="hidden md:block fixed bottom-0 ml-10 mb-10 font-sans text-xs text-white select-none">
                <h1 className="font-bold">&copy; 2025 Shansai Muraleetharan</h1>
            </div>
        </div>
    );
}
