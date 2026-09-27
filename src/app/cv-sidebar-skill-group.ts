import { Component, input } from "@angular/core"

export type SkillGroupData = {
    title: string
    skills: string[]
}

@Component({
    selector: "cv-sidebar-skill-group",
    template: `      
        <h4>{{skillGroup().title}}</h4>

        <ul>
        @for (skill of skillGroup().skills; track $index) {
            <li>{{skill}}</li>
        }
        </ul>
    `,
    styles: `
        :host {
            padding-left: 0.5em;
        }
        
        h4 {
            color: var(--accent-sidebar);
            margin: 0;
            margin-bottom: 0.5em;
        }

        li::marker {
            color: var(--accent-sidebar);
        }

        li {
            font-size: 0.8em;
            color: white;
            line-height: 1.5;
        }
    `,
})
export class CvSidebarSkillGroup {
    skillGroup = input.required<SkillGroupData>()
}
