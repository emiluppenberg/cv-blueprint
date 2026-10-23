import { ContentItemData } from "../../app/cv/cv-content-item";
import { TitleData } from "../../app/cv/cv-content-title";
import { ContactData } from "../../app/cv/cv-sidebar-contact";
import { SidebarProjectData } from "../../app/cv/cv-sidebar-project";
import { SidebarReferenceData } from "../../app/cv/cv-sidebar-reference";
import { SkillGroupData } from "../../app/cv/cv-sidebar-skill-group";

export const title: TitleData = {
    name: "Alex Exempel",
    title: "Systemutvecklare",
    summary: "Nyfiken systemutvecklare som skapar tydliga gränssnitt och hållbara lösningar.",
    imagePath: "/example.jpg"
}

export const contact: ContactData = {
    address: "Exempelgatan 12",
    postalCode: "123 45",
    city: "Exempelstad",
    telephone: "0700000000",
    email: "alex@example.com",
    linkedin: "https://example.com/linkedin",
    github: "https://example.com/github",
    portfolio: "https://example.com/portfolio",
    additional: "Öppen för nya möjligheter",
}

export const skillGroups: SkillGroupData[] = [
    {
        title: "Programmeringsspråk",
        skills: ["C#", "SQL", "TypeScript"]
    },
    {
        title: "Tekniska kompetenser",
        skills: [
            "Kravanalys",
            "REST API:er",
            "Molntjänster",
            "Databasdesign",
            "Automatiserad testning",
            "Versionshantering med Git",
            "CI/CD med GitHub Actions",
        ]
    },
    {
        title: "Frontend",
        skills: ["Angular", "React", "Vue", "HTML och CSS"]
    },
    {
        title: "Backend",
        skills: ["ASP.NET Core", "Entity Framework Core", "SQL Server"]
    },
    {
        title: "Övrigt",
        skills: [
            "Nyfiken",
            "Kreativ",
            "Lösningsorienterad",
            "Noggrann",
            "Organiserad",
            "Samarbetsvillig",
            "Ansvarsfull",
            "Engelska - flytande i tal och skrift",
            "Svenska - flytande i tal och skrift"
        ]
    }
]

export const references: SidebarReferenceData[] = [
    {
        name: "Kim Exempelsson",
        role: "Teamledare",
        company: "Exempeltech AB",
        relation: "Handledare under min första praktikperiod",
        email: "kim@example.com",
        telephone: "0700000001"
    },
    {
        name: "Robin Testberg",
        role: "Utvecklingschef",
        company: "Demolösningar AB",
        relation: "Handledare under min andra praktikperiod",
        email: "robin@example.com",
        telephone: "0700000002"
    },
    {
        name: "Sam Mallström",
        role: "Butikschef",
        company: "Exempelbutiken AB",
        relation: "Närmaste chef under min senaste anställning",
        email: "sam@example.com",
        telephone: "0700000003"
    }
]

export const projects: SidebarProjectData[] = [
    {
        url: "example.com/planering",
        tech: "Angular, ASP.NET Core, SQL Server",
        content: "En planeringsapp där användaren kan skapa uppgifter, sätta deadlines och följa arbetet i en gemensam kalender. Projektet visar formulärvalidering, filtrering och kommunikation med ett REST API."
    },
    {
        url: "example.com/recept",
        tech: "React, Node.js",
        content: "En receptsamling med sökning, favoriter och automatiska inköpslistor. Ett responsivt gränssnitt gör det enkelt att använda tjänsten på både dator och mobil."
    },
    {
        url: "example.com/anteckningar",
        tech: "Vue, TypeScript",
        content: "En enkel anteckningsapp med kategorier, textsökning och lokal lagring. Projektet används för att utforska tillgänglighet, komponentdesign och automatiserade tester."
    }
]

export const educationItems: ContentItemData[] = [
    {
        headings: ["Systemutvecklare .NET", "400 YH-poäng", "Exempelakademin"],
        paragraphLight: "september 2024—maj 2026",
        contentBullets: [
            "Objektorienterad programmering med C#",
            "Databasutveckling och SQL",
            "Dynamiska webbapplikationer",
            "Agil systemutveckling",
            "Kravanalys och kommunikation",
            "Backendutveckling med ASP.NET Core",
            "Testdriven utveckling",
            "Gränssnittsutveckling med TypeScript",
            "Molntjänster och publiceringsverktyg",
            "LIA 1",
            "LIA 2",
            "Examensarbete"
        ]
    },
    {
        headings: ["Webbutveckling 1", "100 poäng", "Exempelstads lärcentrum"],
        paragraphLight: "april 2024—juni 2024"
    },
    {
        headings: ["Programmering 1", "100 poäng", "Exempelstads lärcentrum"],
        paragraphLight: "januari 2024—mars 2024"
    },
    {
        headings: ["Matematik 2B", "100 poäng", "Exempelstads lärcentrum"],
        paragraphLight: "september 2023—november 2023"
    },
    {
        headings: ["Digitalt skapande", "30 hp", "Exempeluniversitetet"],
        paragraphLight: "januari 2019—juni 2019"
    },
    {
        headings: ["Teknikprogrammet", "2 500 poäng", "Exempelgymnasiet"],
        paragraphLight: "augusti 2015—juni 2018"
    }
]

export const internshipItems: ContentItemData[] = [
    {
        headings: ["Fullstackutvecklare", "Demolösningar AB"],
        paragraphLight: "januari 2026—april 2026",
        content: "Under praktiken vidareutvecklade jag en intern planeringstjänst med Angular, ASP.NET Core och SQL Server tillsammans med ett mindre utvecklingsteam.",
        contentBullets: [
            "Jag tog fram formulär för att skapa och redigera uppgifter, med tydliga felmeddelanden och validering av obligatoriska fält.",
            "Jag utvecklade API-endpoints och databasfrågor för att filtrera uppgifter efter team, status och tidsperiod.",
            "Jag förbättrade laddningstiderna genom att återanvända hämtade data och minska antalet onödiga anrop från klienten.",
            "Jag skrev enhets- och integrationstester för centrala flöden och deltog i kodgranskningar tillsammans med teamet.",
            "Jag bidrog till automatiserade bygg- och testflöden i GitHub Actions inför publicering till en testmiljö."
        ],
        emphasize: "Praktiken gav mig erfarenhet av att följa en funktion från krav och planering till implementation, testning och återkoppling från användare."
    },
    {
        headings: ["Frontendutvecklare", "Exempeltech AB"],
        paragraphLight: "september 2025—november 2025",
        content: "Under min första praktikperiod arbetade jag med ett Vue-baserat kundportalprojekt i ett agilt team med gemensam planering och regelbundna demonstrationer.",
        contentBullets: [
            "Jag byggde återanvändbara komponenter för sökning, filtrering och listvyer utifrån teamets befintliga designsystem.",
            "Jag förbättrade tangentbordsnavigering och formuläretiketter för att göra centrala användarflöden mer tillgängliga.",
            "Jag skrev tester i Vitest för att kontrollera formulärvalidering och kommunikation mellan gränssnittet och API:et.",
            "Jag deltog i genomgångar av användarfeedback och omsatte mindre förbättringsförslag i konkreta ändringar."
        ],
        emphasize: "Genom samarbetet med utvecklare och designer blev jag tryggare i att diskutera lösningar, ställa frågor och ta ansvar för avgränsade uppgifter."
    }
]

export const workItems: ContentItemData[] = [
    {
        headings: ["Butiksmedarbetare", "Exempelbutiken AB"],
        paragraphLight: "juni 2026—augusti 2026",
        content: "Kundservice, varuplock och kassaarbete samt introduktion av nya sommarvikarier."
    },
    {
        headings: ["Lagermedarbetare", "Demologistik AB"],
        paragraphLight: "juni 2025—augusti 2025",
        content: "Orderplock, inventering och packning av leveranser med fokus på noggrannhet och samarbete."
    },
    {
        headings: ["Kundtjänstmedarbetare", "Exempelservice AB"],
        paragraphLight: "januari 2023—augusti 2024",
        content: "Hanterade kundärenden via telefon och e-post samt dokumenterade lösningar i en gemensam kunskapsbank."
    },
    {
        headings: ["Butiksmedarbetare", "Demomarknaden AB"],
        paragraphLight: "juni 2022—december 2022",
        content: "Varupåfyllning, kassahantering och hjälp till kunder i butik."
    },
    {
        headings: ["Restaurangbiträde", "Exempelköket AB"],
        paragraphLight: "juni 2021—maj 2022",
        content: "Servering, förberedelser i köket och diskhantering under både lugna och intensiva arbetspass."
    },
    {
        headings: ["Terminalarbetare", "Demofrakt AB"],
        paragraphLight: "juli 2014—maj 2021",
        content: "Sortering av försändelser, registrering av inkommande gods och kontroll av leveranser."
    },
]
