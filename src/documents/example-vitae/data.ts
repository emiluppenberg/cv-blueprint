import { VitaeContactData } from "../../app/vitae/vitae-contact";
import { VitaeEducationData } from "../../app/vitae/vitae-education";
import { VitaeExperienceData } from "../../app/vitae/vitae-experience";
import { VitaePreviousExperienceData } from "../../app/vitae/vitae-previous-experience";
import { VitaeSkillGroupData } from "../../app/vitae/vitae-skill-group";
import { VitaeTitleData } from "../../app/vitae/vitae-title";

export const title: VitaeTitleData = {
    name: "First Last",
    title: "Junior Software Developer",
};

export const contact: VitaeContactData = {
    location: "Cheshire, United Kingdom",
    telephone: "+44 1234567890",
    email: "first.last@example.com",
};

export const experienceItems: VitaeExperienceData[] = [
    {
        company: "Resume Worded",
        location: "London, United Kingdom",
        description: "Education technology startup with 50+ employees and $100m+ annual revenue",
        role: "Junior Software Developer",
        period: "08/2021 – Present",
        bullets: [
            "Conceptualized a feature that allowed 7K users to transfer their data as CSV files; this feature increased customer retention by 76%.",
            "Developed a web application using AWS S3, NodeJS, MongoDB, React/Redux, and Azure Blob Storage to provide real-time data to 3.8K customers in the intelligence community.",
            "Assisted in maintaining RW’s internal ticketing system, which allowed 3K clients to submit requests online.",
            "Partnered with a team of 15 developers to create an educational platform for 1.2K small businesses.",
        ],
    },
    {
        company: "Polyhire",
        location: "London, United Kingdom",
        description: "NYSE-listed recruitment and employer branding company",
        role: "Quality Assurance Tester",
        period: "10/2019 – 07/2021",
        bullets: [
            "Evaluated applications for efficiency gains and identified 13 areas, boosting department workflow monthly by 60%.",
            "Increased system usability and productivity by 73% via upgrading the company’s legacy software programs.",
            "Enhanced bug detection rate by 93%, an improvement from 100 bugs daily to 2K bugs in one week.",
            "Discovered usability problems via 13 focus group meetings, 32 test cases analysis, and design, including 210 implementation reviews.",
        ],
    },
    {
        company: "Growthsi",
        location: "London, United Kingdom & Barcelona, Spain",
        description: "Career training and membership SaaS with 150,000 users",
        role: "Entry-Level Software Developer",
        period: "06/2018 – 09/2019",
        bullets: [
            "Assisted in software maintenance for 17 engineering applications in the first 30 days of employment.",
            "Examined and proposed design software solutions to meet the user needs of 950 customers.",
            "Supported operating systems-level software testing and filed 1.2K upgrade and bug fix reports.",
            "Created 18 image-to-text applications, which users downloaded 10K times on the first day of upload to gOS and Growthsi Stores.",
        ],
    },
];

export const previousExperienceItems: VitaePreviousExperienceData[] = [
    {
        role: "Game Developer",
        company: "ABC Company",
        location: "London, UK",
        period: "06/2017 – 05/2018",
    },
    {
        role: "UI Developer",
        company: "XYZ Company",
        location: "New York, USA",
        period: "06/2016 – 05/2017",
    },
    {
        role: "Software Analyst (Internship)",
        company: "ABC",
        location: "New York, USA",
        period: "07/2014 – 05/2015",
    },
];

export const skillGroups: VitaeSkillGroupData[] = [
    {
        title: "Hard Skills",
        skills: [
            "Debugging",
            "Programming",
            "Software Design and Testing",
            "Coding",
            "Continuous Integration",
            "Scalability",
        ],
    },
    {
        title: "Techniques",
        skills: ["Mobile Development", "Version Control", "Web programming"],
    },
    {
        title: "Tools and Software",
        skills: ["Android Studio", "NetBeans", "Eclipse", "Xcode"],
    },
    {
        title: "Languages",
        skills: ["English (Native)", "Romanian (Native)", "Spanish (Conversational)"],
    },
];

export const educationItems: VitaeEducationData[] = [
    {
        institution: "University of New York",
        degree: "Bachelor of Science",
        subject: "Software Engineering",
        location: "New York City, New York",
        period: "10/2011 - 06/2014",
    },
];

export const other: VitaeSkillGroupData = {
    skills: [
        "Microsoft Technology Associate (MTA).",
        "Microsoft Certified Solutions Developer (MCSD).",
    ],
};
