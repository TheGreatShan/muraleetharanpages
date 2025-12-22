export interface CareerPath {
    image: string;
    imageAlt: string;
    companyName: string;
    role: string;
    roleTime: string;
    width: number;
    height: number;
    hasBadge: boolean;
    badge: string;
    description: CareerPathDescription[]
}
export interface CareerPathDescription {
    id: number;
    icon: string;
    text: string;
    highlight: boolean;
}

export const careers : CareerPath[] = [
    {
            image: "https://avatars.githubusercontent.com/u/213492932?v=4",
            imageAlt: "Anywell Logo",
            companyName: "AnyWell",
            role: "Founder & Software Engineer",
            roleTime: "September 2025 - now | Remote",
            width: 60,
            height: 60,
            hasBadge: false,
            badge: "",
            description: [
                {
                    id: 1,
                    icon: "🚀",
                    text: "Co-founder of Anywell, an early-stage Swiss startup currently in development",
                    highlight: false
                }
          ]
    },    
    {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/KPMG_blue_logo.svg/2560px-KPMG_blue_logo.svg.png",
            imageAlt: "KPMG Logo",
            companyName: "KPMG Switzerland",
            role: "Junior Software Engineer",
            roleTime: "August 2025 - now | Hybrid",
            width: 110,
            height: 100,
            hasBadge: false,
            badge: "",
            description: [
                {
                    id: 1,
                    icon: "🏢",
                    text: "Migrating several applications from KPMG's on-premise datacenter to Azure",
                    highlight: false
                },
                {
                    id: 2,
                    icon: "🔀",
                    text: "Working on several migrations of PowerShell integrations to C#",
                    highlight: false
                }
                
          ]
        },    
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/KPMG_blue_logo.svg/2560px-KPMG_blue_logo.svg.png",
            imageAlt: "KPMG Logo",
            companyName: "KPMG Switzerland",
            role: "Software Engineering Appretice",
            roleTime: "August 2021 - July 2025 | Hybrid",
            width: 110,
            height: 100,
            hasBadge: true,
            badge: "Grade: 5.8 / 6.0 (2nd best Apprentice in Zurich)",
            description: [
                {
                    id: 1,
                    icon: "🏗️",
                    text: "Solution architecture design and full-stack development of a grade tracking system for KPMG's apprentices",
                    highlight: false
                },
                {
                    id: 2,
                    icon: "🔗",
                    text: "Built a middleware which enhances system interoperability by integrating different data sources like Azure SQL Databases, Excel and KPMG's ERP system and exposing the data via APIs",
                    highlight: false
                },
                {
                    id: 3,
                    icon: "☁️",
                    text: "Successfully migrated multiple business applications to KPMG Switzerland's Azure environment",
                    highlight: false
                },
                {
                    id: 4,
                    icon: "📊",
                    text: "Built a data centralization system to improve KPMG's data accessibility and integration of this system to other important KPMG systems",
                    highlight: false
                },
                {
                    id: 5,
                    icon: "🧪",
                    text: "Applied Test-Driven Development (TDD) approach",
                    highlight: false
                },
                {
                    id: 6,
                    icon: "📋",
                    text: "Created BPMN diagrams for business processes for KPMG's Tax & Legal department",
                    highlight: false
                },
                {
                    id: 7,
                    icon: "👨‍🏫",
                    text: "Mentored other Software engineering apprentices",
                    highlight: false
                },
                {
                    id: 8,
                    icon: "⚡",
                    text: "Used Agile methodologies in all KPMG projects",
                    highlight: false
                },
                {
                    id: 9,
                    icon: "🔄",
                    text: "Created CI/CD integration with Azure DevOps and YAML Pipelines",
                    highlight: false
                },
                {
                    id: 10,
                    icon: "🎓",
                    text: "Wrapping up the apprenticeship with a grade of 5.8 / 6.0",
                    highlight: true
                }
          ]
        }
    ];
