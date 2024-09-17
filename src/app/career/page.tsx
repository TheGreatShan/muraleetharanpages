import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import Image from 'next/image'

export default function Career() {
    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"Career"}/>
                <div className={"mt-4 mx-[50px]"}>
                    <span className={"flex"}>
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/2560px-KPMG_logo.svg.png"}
                            alt={"KPMG logo"}
                            width={110}
                            height={100}
                        />
                        <div className={"ml-5"}>
                            <p className={"font-bold"}> | KPMG Switzerland | Apprentice Software Engineer</p>
                            <p>| August 2021 - now | Hybrid</p>
                        </div>
                    </span>
                    <div className={"mt-5"}>
                        <ul className={"list-disc"}>
                            <li>Working on a project which tracks the grade of KPMGs apprentices</li>
                            <li>Working on middleware which improves System interoperability</li>
                            <li>Working on projects, which centralizes data across the organization</li>
                            <li>Successfully migrated multiple business applications to KPMG Switzerland’s Azure
                                environment to decrease operational costs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Design>
    )
}