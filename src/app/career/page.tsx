import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import Image from 'next/image'

export default function Career() {
    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"Career"}/>
                <div className={"mt-4 mx-[50px] md:text-[12pt] text-[9pt]"}>
                    <div className={"md:flex"}>
                        <div className={"flex justify-center"}>
                            <Image
                                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/2560px-KPMG_logo.svg.png"}
                                alt={"KPMG logo"}
                                width={110}
                                height={100}
                            />
                        </div>

                        <div
                            className={"md:ml-5 md:mt-0 mt-5 font-bold md:text-left text-center"}>
                            <p className={"md:inline"}>KPMG Switzerland <span
                                className={"md:inline md:visible invisible"}> | </span>
                            </p>
                            <p className={"md:inline"}>Apprentice Software Engineer</p>
                            <p>August 2021 - now | Hybrid</p>
                        </div>
                    </div>
                    <div className={"mx-5 mt-5"}>
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