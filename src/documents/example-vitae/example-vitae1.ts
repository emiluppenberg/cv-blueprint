import { Component } from "@angular/core";
import { VitaeContact } from "../../app/vitae/vitae-contact";
import { VitaeContent } from "../../app/vitae/vitae-content";
import { VitaeEducation } from "../../app/vitae/vitae-education";
import { VitaeExperience } from "../../app/vitae/vitae-experience";
import { VitaePage } from "../../app/vitae/vitae-page";
import { VitaePreviousExperience } from "../../app/vitae/vitae-previous-experience";
import { VitaeSection } from "../../app/vitae/vitae-section";
import { VitaeSidebar } from "../../app/vitae/vitae-sidebar";
import { VitaeSkillGroup } from "../../app/vitae/vitae-skill-group";
import { VitaeTitle } from "../../app/vitae/vitae-title";
import {
    contact,
    educationItems,
    experienceItems,
    other,
    previousExperienceItems,
    skillGroups,
    title,
} from "./data";

@Component({
    selector: "example-vitae1",
    imports: [
        VitaePage,
        VitaeContent,
        VitaeTitle,
        VitaeSection,
        VitaeExperience,
        VitaePreviousExperience,
        VitaeSidebar,
        VitaeContact,
        VitaeSkillGroup,
        VitaeEducation,
    ],
    template: `
        <vitae-page>
            <vitae-content>
                <vitae-title [data]="title" />
                <vitae-section heading="Work experience">
                    @for (item of experienceItems; track $index) {
                        <vitae-experience [data]="item" />
                    }
                </vitae-section>
                <vitae-section heading="Previous experience" [gap]="0">
                    @for (item of previousExperienceItems; track $index) {
                        <vitae-previous-experience [data]="item" />
                    }
                </vitae-section>
            </vitae-content>
            <vitae-sidebar>
                <vitae-section heading="Contact" variant="sidebar">
                    <vitae-contact [data]="contact" />
                </vitae-section>
                <vitae-section heading="Skills" variant="sidebar" [gap]="1">
                    @for (group of skillGroups; track $index) {
                        <vitae-skill-group [data]="group" />
                    }
                </vitae-section>
                <vitae-section heading="Education" variant="sidebar">
                    @for (item of educationItems; track $index) {
                        <vitae-education [data]="item" />
                    }
                </vitae-section>
                <vitae-section heading="Other" variant="sidebar">
                    <vitae-skill-group [data]="other" />
                </vitae-section>
            </vitae-sidebar>
        </vitae-page>
    `,
    styles: `
        :host { display: block; width: 100%; height: 100%; }
    `,
})
export default class ExampleVitae1 {
    title = title;
    contact = contact;
    experienceItems = experienceItems;
    previousExperienceItems = previousExperienceItems;
    skillGroups = skillGroups;
    educationItems = educationItems;
    other = other;
}
