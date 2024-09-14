import {SocialIcon} from "react-social-icons";
import Design from "muralee/app/components/design";

export default function Home() {
    return (
        <Design>
            <div className="content-center h-screen">
                <h1 className="text-6xl">Shansai</h1>
                <h1 className="text-8xl">Muraleetharan</h1>
                <div className={"mt-4"}>
                    <SocialIcon network={"linkedin"} url={"https://www.linkedin.com/in/shansai-muraleetharan"}
                                bgColor={"black"} className={"mr-2"}/>
                    <SocialIcon network={"github"} url={"https://github.com/TheGreatShan"}
                                bgColor={"black"}/>
                </div>
            </div>
        </Design>
    );
}
