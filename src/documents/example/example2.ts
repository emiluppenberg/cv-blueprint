import { Component } from "@angular/core";
import { CvContent } from "../../app/cv/cv-content";
import { CvContentItem } from "../../app/cv/cv-content-item";
import { CvContentTitle } from "../../app/cv/cv-content-title";
import { CvSection } from "../../app/cv/cv-section";
import { CvSidebar } from "../../app/cv/cv-sidebar";
import { CvSidebarContact } from "../../app/cv/cv-sidebar-contact";
import { CvSidebarProject } from "../../app/cv/cv-sidebar-project";
import { contact, internshipItems, projects, title } from "./data";

@Component({
    selector: "example2",
    template: `
        <cv-content>
            <cv-content-title
            [data]="title"/>
            <cv-section 
            variant="content"
            heading="Praktikplatser"
            [gap]="0.5">
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
                @for (project of projects; track $index) {
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
export default class Example2 {
    title = title
    contact = contact
    internshipItems = internshipItems
    projects = projects
}