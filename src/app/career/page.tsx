import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import Image from 'next/image'
import { careers } from "./CareerPath";

export default function Career() {
    

    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"Career"} />
                <div className="flex-col">
                {
                    careers.map(career => (
                        <div className={"cursor-default w-screen transform transition duration-500 hover:scale-105 card border rounded-lg bg-zinc-500 p-5 justify-center mt-4 mx-[50px] md:text-[12pt] text-[9pt]"} key={`${career.companyName}${career.description}`}>
                                <div className={"card-body flex flex-col items-center justify-center"}>
                                    <div className="flex gap-4 flex-row items-center">
                                        <div className="rounded-lg">
                                            <Image
                                                src={career.image}
                                                alt={career.imageAlt}
                                                width={career.width}
                                                height={career.height}
                                            />
                                        </div>

                                        <span className="text-center text-2xl font-bold bold mt-2">{career.companyName}</span>
                                    </div>
                                    <div
                                        className={"md:ml-5 md:mt-0 mt-5 font-bold text-center"}>
                                        <p className={"text-xl mt-3rem"}>{career.role}</p>
                                        <p className="mt-3rem">{career.roleTime}</p>
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
            </div>
        </Design>
    )
}