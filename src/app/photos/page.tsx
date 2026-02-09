"use client"

import Design from "muralee/app/components/design";
import {useEffect, useState} from "react";
import {getPictures} from "muralee/app/photos/photosService";

export default function Photos() {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const load = async () => {
            const res = await getPictures();
            setImages(res);
        }

        load();
    }, []);

    return (
        <Design>
            <div className="mt-5 mx-4 flex items-start sm:items-center p-4 mb-4 text-sm text-fg-warning bg-yellow-800 rounded-xl" role="alert">
                <svg className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                <p><span className="font-medium me-1">Early Alpha</span> This page is in early alpha! Expect bugs</p>
            </div>
            <div className={"grid md:grid-cols-4 grid-cols-1 gap-4 p-4 content-center items-center"}>
                {
                    images.map(x => (
                        <div key={x}>
                            <img src={`data:image/png;base64, ${x}`} alt={"image"}/>
                        </div>
                    ))
                }
            </div>
        </Design>
    )
}
