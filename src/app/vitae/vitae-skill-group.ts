import { Component, input } from "@angular/core";

export type VitaeSkillGroupData = {
    title?: string;
    skills: string[];
};

@Component({
    selector: "vitae-skill-group",
    template: `
        @if (data().title) {
            <h3>{{ data().title }}:</h3>
        }
        <ul>
            @for (skill of data().skills; track $index) {
                <li>{{ skill }}</li>
            }
        </ul>
    `,
    styles: `
        :host { display: block; font-size: 0.78em; line-height: 1.35; }

        h3 {
            width: auto;
            margin: 0;
            border: 0;
            font-size: 1em;
            font-style: italic;
            font-weight: 400;
        }

        ul { margin: 0; padding-left: 0.9em; }
        li::marker { content: '·  '; }
    `,
})
export class VitaeSkillGroup {
    data = input.required<VitaeSkillGroupData>();
}
