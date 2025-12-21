"use client"

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


export default function Nav() {


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="pl-5 md:navbar-start sm:navbar-center mt-5">
                    <Link href="/">
                        <TypeAnimation
                        sequence={[
                            'Welcome!',
                            2000,
                            'Shansai Muraleetharan',
                            2000,
                        ]}
                        repeat={1}
                        className="md:text-xl text-m mt-5 font-serif font-bold"
                        />
                    </Link>
                </div>
            </div>
        </div>

        
    )
}