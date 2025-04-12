"use client"

import {SocialIcon} from "react-social-icons";
import Link from "next/link";
import Head from 'next/head';
import { useState, useEffect } from "react";

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
            <div className={"border-solid select-none border-[7px] border-white bg-[#e7e5e4] md:h-screen h-full"}>
                <div
                    className="content-center bg-[#e7e5e4] h-screen md:h-full text-black font-sans border-solid border-[7px] p-10 border-black">
                    <div className={"fixed top-0 left-0 font-bold ml-10 mt-10 text-[30px]"}>
                        <h1>
                            {ctime}
                        </h1>
                    </div>
                    <h1 className="md:text-6xl text-3xl font-serif">Shansai</h1>
                    <h1 className="md:text-8xl text-4xl font-serif">Muraleetharan</h1>
                    <div className={"mt-4"}>
                        <SocialIcon network={"linkedin"} url={"https://www.linkedin.com/in/shansai-muraleetharan"}
                                    bgColor={"black"} className={"mr-2"}/>
                        <SocialIcon network={"github"} url={"https://github.com/TheGreatShan"}
                                    bgColor={"black"} className={"mr-2"}/>
                        <Link href={"/about"} className={"text-white bg-black py-4 px-3 rounded-full mr-2"}>About</Link>
                        <Link href={"/career"} className={"text-white bg-black py-4 px-3 rounded-full mr-2"}>Career</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
