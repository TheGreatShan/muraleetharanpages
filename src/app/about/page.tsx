import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";

export default function About() {
    return (
        <Design>
            <div className={"mt-5"}>
                <Header title={"About"}/>
                <p className={"mt-4 mx-[50px]"}>
                    Hi, I am a software developer with a passion for creating web applications using React and C#. I
                    started
                    my journey in 2021, when I decided to pursue my dream of becoming a programmer. Since then, I have
                    learned a lot from online courses, books, and projects. I enjoy solving problems, learning new
                    technologies, and collaborating with other developers. My goal is to build user-friendly,
                    responsive,
                    and scalable websites that can make a positive impact on the world. This portfolio showcases some of
                    my
                    work and skills. Feel free to contact me if you want to know more about me or my projects.
                </p>
            </div>
        </Design>
    )
}