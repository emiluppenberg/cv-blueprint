import { Component } from "@angular/core";
import { CvContent } from "../cv-content";
import { CvSidebar } from "../cv-sidebar";
import { CvContentTitle } from "../cv-content-title";
import { CvSectionItemData } from "../cv-content-section-item";
import { CvContentSection } from "../cv-content-section";
import { CvSidebarContact } from "../cv-sidebar-contact";

@Component({
    selector: "page1",
    template: `
        <cv-content>
            <cv-content-title
            name="Emil Uppenberg"
            title="Systemutvecklare"/>
            <cv-content-section 
            heading="Utbildning"
            [sectionItems]="educationItems"/>
        </cv-content>
        <cv-sidebar>
            <cv-sidebar-contact 
            address="Tvistevägen 1B"
            postalCode="907 29"
            city="Umeå"
            telephone="0790360480"
            email="uppenberg95@gmail.com"
            linkedin="https://www.linkedin.com/in/emiluppenberg95"
            github="https://github.com/emiluppenberg"
            />
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
    imports: [CvContent, CvContentTitle, CvSidebar, CvContentSection, CvSidebarContact]
})
export class Page1 {
    educationItems: CvSectionItemData[] = [
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
}