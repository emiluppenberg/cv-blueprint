import { Component, input } from "@angular/core";

export type VitaeEducationData = {
    institution: string;
    degree: string;
    subject: string;
    location: string;
    period: string;
};

@Component({
    selector: "vitae-education",
    template: `
        <h3>{{ data().institution }}</h3>
        <p>{{ data().degree }}</p>
        <p>{{ data().subject }}</p>
        <div class="details">
            <p>{{ data().location }}</p>
            <p>{{ data().period }}</p>
        </div>
    `,
    styles: `
        :host { display: block; font-size: 0.8em; line-height: 1.35; }

        h3 {
            width: auto;
            margin: 0;
            border: 0;
            font-size: 1.1em;
            font-weight: 400;
        }

        p { margin: 0; line-height: inherit; }
        .details { font-size: 0.9em; }
    `,
})
export class VitaeEducation {
    data = input.required<VitaeEducationData>();
}
