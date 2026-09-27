import { Component } from "@angular/core";
import { CvContent } from "../cv-content";
import { CvSidebar } from "../cv-sidebar";
import { CvContentTitle } from "../cv-content-title";
import { ContentItemData, CvContentItem } from "../cv-content-item";
import { CvSection } from "../cv-section";
import { CvSidebarContact } from "../cv-sidebar-contact";
import { CvSidebarSkillGroup, SkillGroupData } from "../cv-sidebar-skill-group";
import { contact } from "../../utilities/const";

@Component({
    selector: "page1",
    template: `
        <cv-content>
            <cv-content-title
            name="Emil Uppenberg"
            title="Systemutvecklare"/>
            <cv-section
            variant="content" 
            heading="Utbildning">
                @for (item of educationItems; track $index) {
                    <cv-content-item 
                    [item]="item"
                    />
                }
            </cv-section>
        </cv-content>
        <cv-sidebar>
            <cv-sidebar-contact 
            [contact]="contact"
            />
            <cv-section
            variant="sidebar"
            heading="Kompetenser"
            >
                @for (skillGroup of skillGroups; track $index) {
                    <cv-sidebar-skill-group [skillGroup]="skillGroup"/>
                }
            </cv-section>
        </cv-sidebar>
    `,
    styles: `
        :host {
            display: grid;
            grid-template-columns: 68% 32%;
            width: 100%;
            height: 100%;
        }
    `,
    imports: [CvContent, CvContentTitle, CvSidebar, CvSection, CvSidebarContact, CvSidebarSkillGroup, CvContentItem]
})
export class Page1 {
    contact = contact

    educationItems: ContentItemData[] = [
        {
            headings: [
                "Systemutvecklare .NET",
                "400 YH-poäng",
                "YrkesAkademin",
            ],
            paragraphLight: "september 2024 - maj 2026",
            contentBullets: [
                "Objektorienterad programmering med C#",
                "Databasutveckling",
                "Dynamiska webbapplikationer",
                "Agil systemutveckling",
                "Affärsmannaskap",
                "Programmering med C#/.NET",
                "Testdriven utveckling",
                "Windows-applikationsutveckling",
                "Molntjänster och publiceringsverktyg",
                "LIA 1",
                "LIA 2",
                "Examensarbete",
            ]
        },
        {
            headings: [
                "Skapande musik - musikproduktion",
                "30 hp",
                "Umeå universitet",
            ],
            paragraphLight: "januari 2018 - juni 2018",
        },
        {
            headings: [
                "Estetiska programmet - musik",
                "2 500 poäng",
                "Midgårdsskolan",
            ],
            paragraphLight: "augusti 2011 - juni 2014"
        }
    ]

    skillGroups: SkillGroupData[] = [
        {
            title: "Programmeringsspråk",
            skills: [
                "C#",
                "TypeScript",
                "SQL",
                "HTML",
                "CSS"
            ]
        },
        {
            title: "Tekniker",
            skills: [
                "Molntjänster",
                "REST-API:er",
                "MCP-server",
                "Databaser",
                "Versionshantering",
                "SEO",
                "Kravanalys",
                "Testutveckling",
                "Serverlösa funktioner"
            ]
        },
        {
            title: "Frontend",
            skills: [
                "React",
                "Vue",
                "Blazor",
                "ASP.NET MVC",
                ".NET MAUI",
                "WPF"
            ]
        },
        {
            title: "Backend",
            skills: [
                "ASP.NET Core",
                "Entity Framework Core",
                "Node.js",
                "WebSocket"
            ]
        },
        {
            title: "Övrigt",
            skills: [
                "Driven",
                "Nyfiken",
                "Kommunikativ",
                "Samarbetsvillig",
                "Engelska - flytande i tal och skrift"
            ]
        }
    ]

}