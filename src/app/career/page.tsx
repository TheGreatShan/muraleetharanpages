import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import Image from 'next/image'
import { careers } from "./CareerPath";

export default function Career() {
    

    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"Career"} />
                {
                    careers.map(career => (
                        <div className={"mt-4 mx-[50px] md:text-[12pt] text-[9pt]"} key={`${career.companyName}${career.description}`}>
                                <div className={"md:flex"}>
                                    <div className={"grid place-items-center w-full md:w-auto"}>
                                        <Image
                                            src={career.image}
                                            alt={career.imageAlt}
                                            width={career.width}
                                            height={career.height}
                                        />
                                    </div>

                                    <div
                                        className={"md:ml-5 md:mt-0 mt-5 font-bold md:text-left text-center"}>
                                        <p className={"md:inline"}>{career.companyName} <span
                                            className={"md:inline md:visible invisible"}> | </span>
                                        </p>
                                        <p className={"md:inline"}>{career.role}</p>
                                        <p>{career.roleTime}</p>
                                        {career.hasBadge && career.badge !== "" && 
                                               <span className="inline-flex items-center gap-1 rounded bg-[#00ff99] px-2 py-1 text-black text-[9pt]"> 
                                                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                                                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle>
                                                            <polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></polyline>
                                                        </g>
                                                    </svg>
                                                    {career.badge}
                                                </span>}
                                    
                                    </div>
                                </div>
                                <div className={"mx-5 mt-5"}>
                                    <ul>
                                        {career.description.map((achievement) => (
                                            <li 
                                                key={achievement.id} 
                                                className={`flex items-start gap-2 ${achievement.highlight ? 'font-semibold text-blue-800' : ''}`}
                                            >
                                                <span className={"flex-shrink-0"}>
                                                    {achievement.icon}
                                                </span>
                                                <span>{achievement.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                    ))
                }
            </div>
        </Design>
    )
}