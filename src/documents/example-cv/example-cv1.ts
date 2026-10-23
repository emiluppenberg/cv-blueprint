import { Component } from "@angular/core";
import { CvContent } from "../../app/cv/cv-content";
import { CvContentItem } from "../../app/cv/cv-content-item";
import { CvContentTitle } from "../../app/cv/cv-content-title";
import { CvSection } from "../../app/cv/cv-section";
import { CvSidebar } from "../../app/cv/cv-sidebar";
import { CvSidebarContact } from "../../app/cv/cv-sidebar-contact";
import { CvSidebarSkillGroup } from "../../app/cv/cv-sidebar-skill-group";
import { contact, educationItems, skillGroups, title } from "./data";

@Component({
    selector: "example1",
    template: `
        <cv-content>
            <cv-content-title
            [data]="title"/>
            <cv-section
            variant="content" 
            heading="Utbildning"
            [gap]="0.5">
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
export default class ExampleCv1 {
    title = title
    contact = contact
    educationItems = educationItems
    skillGroups = skillGroups
}