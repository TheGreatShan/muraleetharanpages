import {SocialIcon} from "react-social-icons";
import Link from "next/link";
import Head from 'next/head';
export default function Home() {
    return (
        <div>
            <Head>
                <meta name={"description"} content="Shansai Muraleetharan Portfolio" />
                <meta name={"keywords"} content="Shansai, Muraleetharan, Shansai Muraleetharan, TheGreatShan, Shansai Linkedin, Shansai Muraleetharan Linkedin, Muraleetharan Linkedin" />
            </Head>
            <div className={"border-solid border-[7px] border-white bg-[#e7e5e4] md:h-screen h-full"}>
                <div
                    className="content-center bg-[#e7e5e4] h-screen md:h-full text-black font-libre border-solid border-[7px] p-10 border-black">
                    <h1 className="md:text-6xl text-3xl">Shansai</h1>
                    <h1 className="md:text-8xl text-4xl">Muraleetharan</h1>
                    <div className={"mt-4"}>
                        <SocialIcon network={"linkedin"} url={"https://www.linkedin.com/in/shansai-muraleetharan"}
                                    bgColor={"black"} className={"mr-2"}/>
                        <SocialIcon network={"github"} url={"https://github.com/TheGreatShan"}
                                    bgColor={"black"} className={"mr-2"}/>
                        <Link href={"/about"} className={"text-white bg-black p-4 rounded-full"}>About</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
