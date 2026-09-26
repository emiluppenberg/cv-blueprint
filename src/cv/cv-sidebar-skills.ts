import { Component, input } from "@angular/core"

export type SkillGroup = {
    title: string
    skills: string[]
}

@Component({
    selector: "cv-sidebar-skills",
    template: `
        <h3>Kompetenser</h3>
        
        @for (skillGroup of skillGroups(); track $index) {
            <div class="skill-group">
                <h4>{{skillGroup.title}}</h4>

                <ul>
                @for (skill of skillGroup.skills; track $index) {
                    <li>{{skill}}</li>
                }
                </ul>
            </div>
        }
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }

        h3 {
            width: 100%;
            color: white;
            border-bottom-color: white;
        }

        .skill-group {
            padding-left: 1em;

            h4 {
                color: var(--accent-sidebar);
                margin: 0;
                margin-bottom: 0.5em;
            }

            li::marker {
                color: var(--accent-sidebar);
            }

            li {
                color: white;
                line-height: 1.3;
            }
        }
    `,
})
export class CvSidebarSkills {
    skillGroups = input.required<SkillGroup[]>()
}
