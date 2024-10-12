import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import Image from 'next/image'

export default function Career() {
    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"Career"} />
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
                            <p className={"md:inline"}>Software Engineering Apprentice</p>
                            <p>August 2021 - now | Hybrid</p>
                        </div>
                    </div>
                    <div className={"mx-5 mt-5"}>
                        <ul className={"list-disc"}>
                            <li>Solution architecture design and full-stack development of a grade tracking system for KPMG&lsquo;s apprentices</li>
                            <li>Built a middleware which enhances system interoperability by integrating different data sources like Azure SQL Databases, Excel and KPMG&lsquo;s ERP system and exposing the data via APIs</li>
                            <li>Successfully migrated multiple business applications to KPMG Switzerland&lsquo;s Azure environment</li>
                            <li>Build a data centralization system to improve KPMG&lsquo;s data accessibility and integration of this system to other important KPMG systems</li>
                            <li>Applied Test-Driven Development (TDD) approach</li>
                            <li>Created BPMN diagrams for business processes for KPMGs Tax & Legal department</li>
                            <li>Mentored other Software engineering apprentices</li>
                            <li>Used Agile methodologies in all KPMG projects</li>
                            <li>Created CI / CD integration with Azure DevOps and YAML Pipelines</li>

                        </ul>
                    </div>
                </div>
            </div>
        </Design>
    )
}