import { Component, input } from "@angular/core";

export type VitaePreviousExperienceData = {
    role: string;
    company: string;
    location: string;
    period: string;
};

@Component({
    selector: "vitae-previous-experience",
    template: `
        <div class="details">
            <strong>{{ data().role }}</strong>, {{ data().company }}, {{ data().location }}
        </div>
        <span class="period">{{ data().period }}</span>
    `,
    styles: `
        :host {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 0.6em;
            font-size: 0.88em;
            line-height: 1.3;
        }

        .details { min-width: 0; }
        .period { flex-shrink: 0; color: #111; }
    `,
})
export class VitaePreviousExperience {
    data = input.required<VitaePreviousExperienceData>();
}
