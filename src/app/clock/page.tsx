"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [ctime, setTime] = useState<string>(""); // Startet mit einem leeren Wert

    useEffect(() => {
        // Aktualisiert die Zeit jede Sekunde
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); // Konsistentes 12-Stunden-Format
        }, 1000);

        return () => clearInterval(interval); // Cleanup des Intervalls bei Unmount
    }, []);

    return (
        <div className={"border-solid border-[7px] border-white bg-[#e7e5e4] min-h-screen w-screen h-full flex flex-grow"}>
            <div
                className={
                    "border-solid border-[7px] border-black bg-[#e7e5e4] text-black font-libre w-screen min-h-full"
                }
            >
                <div className={"md:p-10"}>
                    <div>
                        <h1 className="text-6xl font-bold mx-auto my-auto">
                            {ctime || "Loading..."}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}