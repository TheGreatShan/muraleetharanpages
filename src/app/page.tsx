import {SocialIcon} from "react-social-icons";

export default function Home() {
    return (
        <div className="bg-[#e7e5e4] h-screen text-black border-solid border-[7px] p-10 border-black content-center">
            <div className="font-libre">
                <h1 className="text-6xl">Shansai</h1>
                <h1 className="text-8xl">Muraleetharan</h1>
            </div>
            <div className={"mt-4"}>
                <SocialIcon network={"linkedin"} url={"https://www.linkedin.com/in/shansai-muraleetharan"}
                            bgColor={"black"} className={"mr-2"}/>
                <SocialIcon network={"github"} url={"https://github.com/TheGreatShan"}
                            bgColor={"black"}/>
            </div>
        </div>
    );
}
