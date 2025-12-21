import Design from "muralee/app/components/design";
import Header from "muralee/app/components/header";

export default function About() {
    return (
        <Design>
            <div className="mt-5">
                <Header title="About Me" />
                <div className="mt-6 mx-[50px] md:text-[12pt] text-[9pt]">
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="flex-1">
                            <h2 className="text-[16pt] md:text-[20pt] font-bold mb-4 text-center md:text-left">
                                Hi, I'm Shansai 👋
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                <span className="font-semibold">Software Engineer and IT Consultant</span> specializing in C# and Azure cloud solutions. 🚀
                            </p>
                            <p className="mb-4 leading-relaxed">
                                Currently wrapping up my <span className="font-semibold">Software Engineering apprenticeship at KPMG Switzerland with a grade of 5.8/6.0</span>, where I've designed and built enterprise-grade applications, developed middleware integrating Azure SQL, Excel, and ERP systems, and successfully migrated business-critical applications to Azure. I apply Test-Driven Development (TDD), Agile methodologies, and have built CI/CD pipelines using Azure DevOps and YAML.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                Alongside my professional work, I'm pursuing my studies at <span className="font-semibold">ZHAW (Zurich University of Applied Sciences)</span>, deepening my knowledge in computer science fundamentals, discrete mathematics, and software architecture. 📚
                            </p>
                            <p className="mb-4 leading-relaxed">
                                My technical stack centers around <span className="font-semibold">C# (.NET), React, Azure services</span> (Functions, SQL, DevOps), and Infrastructure as Code. I'm passionate about building scalable, maintainable web applications and have experience mentoring other software engineering apprentices.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                Beyond my work at KPMG, I'm <span className="font-semibold">co-founder of Anywell</span>, an early-stage Swiss startup currently in development. 💡
                            </p>
                            <p className="leading-relaxed">
                                This portfolio showcases projects and skills from both my professional experience and personal explorations. Feel free to reach out if you'd like to discuss software development, cloud architecture, or potential collaborations!
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 mb-8 text-center">
                        <div className="bg-[#dcd4fe] text-black rounded-lg p-6">
                            <h3 className="text-[14pt] md:text-[16pt] font-bold mb-3">
                                Let's Connect! 🤝
                            </h3>
                            <p className="mb-4 text-[10pt] md:text-[11pt]">
                                Interested in discussing software development, cloud architecture, or collaboration opportunities?
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a 
                                    href="https://www.linkedin.com/in/shansai-muraleetharan/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    💼 LinkedIn
                                </a>
                                <a 
                                    href="https://github.com/TheGreatShan" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    💻 GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Design>
    );
}