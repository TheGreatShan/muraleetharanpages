"use client"

import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";
import { useEffect, useState } from "react";
import { CalculateDecimal } from "../lib/CalculateDecimal";

export default function About() {
    const [Time, setTime] = useState<string>("")
    const [result, setResult] = useState<number>(0)
    useEffect(() => {
      setResult(CalculateDecimal(Time))
    }, [Time])

    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"SSBD - Same same but different "}/>
                <input type="string" placeholder="Enter time" onChange={(e) => setTime(e.target.value)}/>
                <h1>{result}</h1>
                </div>
            </Design>
        )
    }