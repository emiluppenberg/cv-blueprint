import { Component } from "@angular/core";
import { CvContent } from "../../app/cv/cv-content";
import { CvContentItem } from "../../app/cv/cv-content-item";
import { CvContentTitle } from "../../app/cv/cv-content-title";
import { CvSection } from "../../app/cv/cv-section";
import { CvSidebar } from "../../app/cv/cv-sidebar";
import { CvSidebarContact } from "../../app/cv/cv-sidebar-contact";
import { CvSidebarReference } from "../../app/cv/cv-sidebar-reference";
import { contact, references, title, workItems } from "./data";

@Component({
    selector: "example3",
    template: `
        <cv-content>
            <cv-content-title
            [data]="title"/>
            <cv-section 
            variant="content"
            heading="Arbetslivserfarenhet"
            [gap]="0.5">
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
export default class Example3 {
    title = title
    contact = contact
    workItems = workItems
    references = references
}