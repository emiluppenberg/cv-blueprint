import { Component, input } from "@angular/core";

export type VitaeExperienceData = {
    company: string;
    location: string;
    description?: string;
    role: string;
    period: string;
    bullets: string[];
};

@Component({
    selector: "vitae-experience",
    template: `
        <article>
            <h3><strong>{{ data().company }}</strong>, {{ data().location }}</h3>
            @if (data().description) {
                <p class="description">{{ data().description }}</p>
            }
            <div class="role-row">
                <h4>{{ data().role }}</h4>
                <span class="period">{{ data().period }}</span>
            </div>
            <ul>
                @for (bullet of data().bullets; track $index) {
                    <li>{{ bullet }}</li>
                }
            </ul>
        </article>
    `,
    styles: `
        :host { display: block; min-width: 0; }

        h3 {
            width: auto;
            margin: 0;
            border: 0;
            font-size: 1em;
            font-weight: 400;
            line-height: 1.3;
        }

        .description {
            margin: 0.15em 0 0.5em;
            font-size: 0.88em;
            font-style: italic;
            line-height: 1.25;
        }

        .role-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 0.6em;
            margin: 0.4em 0;
        }

        h4 { margin: 0; font-size: 1em; font-weight: 400; }
        .period { flex-shrink: 0; font-size: 0.88em; color: #111; }

        ul { margin: 0; padding-left: 3em; font-size: 0.9em; line-height: 1.25; }
        li { padding-left: 0.15em; }
        li::marker { color: var(--vitae-bullet); }
    `,
})
export class VitaeExperience {
    data = input.required<VitaeExperienceData>();
}
