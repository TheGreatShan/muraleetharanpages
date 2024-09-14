import {SocialIcon} from "react-social-icons";
import Link from "next/link";

export default function Home() {
    return (

        <div
            className="content-center bg-[#e7e5e4] h-screen text-black font-libre border-solid border-[7px] p-10 border-black">
            <h1 className="text-6xl">Shansai</h1>
            <h1 className="text-8xl">Muraleetharan</h1>
            <div className={"mt-4"}>
                <SocialIcon network={"linkedin"} url={"https://www.linkedin.com/in/shansai-muraleetharan"}
                            bgColor={"black"} className={"mr-2"}/>
                <SocialIcon network={"github"} url={"https://github.com/TheGreatShan"}
                            bgColor={"black"} className={"mr-2"}/>
                <Link href={"/about"} className={"text-white bg-black p-4 rounded-full"}>About</Link>

            </div>
        </div>
    );
}
