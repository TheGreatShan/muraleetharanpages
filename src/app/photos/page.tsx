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
