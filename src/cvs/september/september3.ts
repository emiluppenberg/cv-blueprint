import { Component } from "@angular/core";
import { contact } from "../../utilities/const"
import { CvContent } from "../../app/cv-content";
import { ContentItemData, CvContentItem } from "../../app/cv-content-item";
import { CvContentTitle } from "../../app/cv-content-title";
import { CvSection } from "../../app/cv-section";
import { CvSidebar } from "../../app/cv-sidebar";
import { CvSidebarContact } from "../../app/cv-sidebar-contact";
import { CvSidebarReference, SidebarReferenceData } from "../../app/cv-sidebar-reference";

@Component({
    selector: "september3",
    template: `
        <cv-content>
            <cv-content-title
            name="Emil Uppenberg"
            title="Systemutvecklare"/>
            <cv-section 
            variant="content"
            heading="Arbetslivserfarenhet">
                @for (item of workItems; track $index) {
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
            heading="Referenser">
                @for (reference of references; track $index) {
                    <cv-sidebar-reference [reference]="reference" />
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
    imports: [CvContent, CvContentTitle, CvSidebar, CvSection, CvSidebarContact, CvContentItem, CvSidebarReference]
})
export default class September3 {
    contact = contact
    
    workItems: ContentItemData[] = [
        {
            headings: [
                "Lagermedarbetare",
                "GetCamping Sverige AB"
            ],
            paragraphLight: "maj 2026—september 2026",
            content: "Varuplock, lagerinventering och packning av paket."
        },
        {
            headings: [
                "Butiksmedarbetare",
                "Lycksele Mat AB",
            ],
            paragraphLight: "juni 2022—november 2023",
            content: "Varuplock, kassaarbete och hemleverans av kundbeställningar."
        },
        {
            headings: [
                "Butiksmedarbetare",
                "Lyckselemacken AB"
            ],
            paragraphLight: "maj 2022—september 2023",
            content: "Servering och tillredning av mat, skötsel av butik och uthyrning av släp."
        },
        {
            headings: [
                "Restaurangbiträde",
                "Great Eastern i Lycksele AB"
            ],
            paragraphLight: "juni 2021—september 2021",
            content: "Servering av mat, kassahantering och diskhantering."
        },
        {
            headings: [
                "Maskinoperatör",
                "Hedlunda Industri AB"
            ],
            paragraphLight: "januari 2021—maj 2021",
            content: "Styrning, underhåll och övervakning av en produktionsmaskin."
        },
        {
            headings: [
                "Terminalarbetare",
                "PostNord Sverige AB"
            ],
            paragraphLight: "juli 2018—november 2020",
            content: "Hantering av en blad-sorteringsmaskin."
        },
        {
            headings: [
                "Restaurangbiträde",
                "Thairestaurang i Umeå AB"
            ],
            paragraphLight: "december 2016—december 2017",
            content: "Servering av mat, kassahantering, köksassistans och diskhantering."
        },
        {
            headings: [
                "Lokalvårdare",
                "Norrlands Miljövård AB"
            ],
            paragraphLight: "juni 2014—november 2016",
            content: "Städning och tillsyn av gymlokaler."
        }
    ]

    references: SidebarReferenceData[] = [
        {
            name: "Anders Abrahamsson",
            role: "VD",
            company: "Routined AB",
            relation: "Handledare under min LIA hos Routined AB",
            email: "anders.abrahamsson@routined.se",
            telephone: "0703726009"
        },
        {
            name: "Peter Johansson",
            role: "VD",
            company: "XLENT Umeå AB",
            relation: "Handledare under min LIA hos XLENT Umeå AB",
            email: "peter.johansson@xlent.se",
            telephone: "0708778055"
        },
        {
            name: "Ove Sundqvist",
            role: "VD",
            company: "GetCamping Sverige AB",
            relation: "Platschef under min senaste anställning",
            email: "ove@getcamping.se",
            telephone: "0706424084"
        }
    ]
}