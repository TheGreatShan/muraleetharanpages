import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import Image from 'next/image'
import { careers } from "./CareerPath";

export default function Career() {
    

    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"Career"} />
                <div className="flex flex-col gap-4 px-4 md:px-12">
                {
                    careers.map(career => (
                        <div className={"cursor-default md:transform md:transition md:duration-500 hover:scale-105 card border rounded-lg bg-zinc-900 p-5 justify-center mt-4 mx-[50px] md:text-[12pt] text-[9pt]"} key={`${career.companyName}${career.description}`}>
                                <div className={"card-body flex flex-col items-center justify-center"}>
                                    <div className="flex md:gap-4 flex-col items-center gap-3 w-full">
                                        <div className="rounded-lg">
                                            <Image
                                                src={career.image}
                                                alt={career.imageAlt}
                                                width={career.width}
                                                height={career.height}
                                            />
                                        </div>

                                        <span className="text-center text-xl sm:text-2xl font-bold mt-1">{career.companyName}</span>
                                    </div>
                                    <div
                                        className={"md:ml-5 md:mt-0 font-bold text-center"}>
                                        <p className={"text-base sm:text-lg md:text-xl md:mt-3"}>{career.role}</p>
                                        <p className="text-sm sm:text-base mt-2">{career.roleTime}</p>
                                        {career.hasBadge && career.badge !== "" && 
                                               <span className="mt-3rem inline-flex items-center gap-1 rounded bg-[#00ff99] px-2 py-1 text-black text-md"> 
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
                                <div className={"mt-4 px-2"}>
                                    <ul className="space-y-2">
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
            </div>
        </Design>
    )
}