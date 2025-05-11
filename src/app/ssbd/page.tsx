"use client"

import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import { useEffect, useState } from "react";
import { CalculateDecimal } from "../lib/CalculateDecimal";

export default function Ssbd() {
    const [Time, setTime] = useState<string>("")
    const [result, setResult] = useState<number>(0)
    useEffect(() => {
      setResult(CalculateDecimal(Time))
    }, [Time])

    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"SSBD - Same same but different "}/>
                <div className="flex mx-auto my-auto mt-10">
                    <input type="time" className="rounded-xl mx-auto my-auto px-5 py-5" placeholder="hh:mm" onChange={(e) => setTime(e.target.value)}/>
                </div>
                <div className="flex">
                    <h1 className="mx-auto my-auto font-bold text-3xl mt-10">{result}</h1>
                </div>
                </div>
            </Design>
        )
    }