import { Component } from "@angular/core";
import { CvContent } from "../cv-content";
import { CvSidebar } from "../cv-sidebar";
import { CvContentTitle } from "../cv-content-title";
import { ContentItemData, CvContentItem } from "../cv-content-item";
import { CvSection } from "../cv-section";
import { CvSidebarContact } from "../cv-sidebar-contact";
import { SidebarProjectData, CvSidebarProject } from "../cv-sidebar-project";
import { contact } from "../../utilities/const";

@Component({
    selector: "page2",
    template: `
        <cv-content>
            <cv-content-title
            name="Emil Uppenberg"
            title="Systemutvecklare"/>
            <cv-section 
            variant="content"
            heading="Praktikplatser">
                @for (item of internshipItems; track $index) {
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
            heading="Egna projekt">
                @for (project of projectItems; track $index) {
                    <cv-sidebar-project 
                    [project]="project"
                    />
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
    imports: [CvContent, CvContentTitle, CvSidebar, CvSection, CvSidebarContact, CvContentItem, CvSidebarProject]
})
export class Page2 {
    contact = contact
    
    internshipItems: ContentItemData[] = [
        {
            headings: [
                "Fullstackutvecklare",
                "XLENT Umeå AB"
            ],
            paragraphLight: "januari 2026 - april 2026",
            content: "Under praktiken arbetade jag med React 19, ASP.NET Core och SQL Server för att vidareutveckla företagets interna veckoplaneringssystem.",
            contentBullets: [
                "Genom att strukturera nycklarna i TanStack Query-cachen minskade jag React-klientens svarstider från sekunder till millisekunder.",
                "Jag skapade automatiserade processer i Frends integreringsverktyg för att synkronisera applikationens databas med företagets tidsrapporteringssystem.",
                "Jag levererade ett nytt drag-and-drop-gränssnitt där planering sker genom att flytta perioder och ändra deras längd, med direkt återkoppling och validering mot tillgängliga veckor.",
                "I samband med varje förbättring eller ny funktion implementerade jag tester i Vitest och xUnit för att verifiera funktionaliteten och minska risken för regressioner."
            ],
            emphasize: "Genom nära samarbete med erfarna utvecklare och produktägare utvecklade jag min förmåga att ta fram krav, presentera lösningar och omsätta återkoppling i fortsatt utveckling."
        },
        {
            headings: [
                "Frontendutvecklare",
                "Routined AB"
            ],
            paragraphLight: "september 2025 - november 2025",
            content: "Under praktiken arbetade jag med frontendutveckling av företagets Vue-baserade SaaS-plattform i ett agilt team med Kanban som arbetsmetod.",
            contentBullets: [
                "Jag implementerade WYSIWYG-verktyget Tiptap i plattformen med ett skräddarsytt gränssnitt. Genom att samarbeta med en kollega som hade kunskap om plattformens befintliga WYSIWYG-verktyg CKEditor kunde vi säkerställa kompatibilitet mellan verktygen, så att dokument kunde redigeras i båda utan att formateringen gick förlorad eller orsakade fel.",
                "Jag skrev tester i Vitest för att säkerställa att HTTP-anrop för CRUD-funktioner på kritiska sidor och komponenter skickades till backenden.",
                "Genom att använda Vues inbyggda Transition-komponent och komponenter från shadcn-vue och Reka UI skapade jag responsiva gränssnittsförbättringar, bland annat en ihopfällbar sidopanel och en skräddarsydd kontextmeny."
            ],
            emphasize: "Genom analys av användarbehov och utvärdering av lösningar utvecklade jag min förmåga att bidra till ständig förbättring."
        }
    ]

    projectItems: SidebarProjectData[] = [
        {
            
            url:    "jsonfn.com",
            tech: "Blazor",
            content: "JSONfn är en webbapplikation framtagen för att automatisera delar av utvecklingsprocessen vid arbete med JSON-data från externa API:er. Användaren väljer nyckel-värde-par och applikationen konstruerar C# eller TypeScript typer utifrån urvalen."
        },
        {
            url:       "flyrep.org",
            tech: "React, ASP.NET Core, Netlify Functions, Supabase",
            content: "Webbapplikationen förenklar planering av flygrutter genom att göra TAF-, METAR- och NOTAM-rapporter enklare att tolka. Användaren väljer vilken information som ska markeras, och en typad markeringsmotor kopplar reguljära uttryck till Sass-klasser för tydlig färgkodning.",
        },
        {
            url: "beatdoc.netlify.app",
            tech: "React, Node.js",
            content: "BeatDoc är en webbapplikation där användaren komponerar musik i ett sequencergränssnitt, antingen manuellt eller med hjälp av AI. AI-integrationen använder en Node.js-baserad MCP-server som kommunicerar med React-klienten i realtid via WebSocket."
        }
    ]
}