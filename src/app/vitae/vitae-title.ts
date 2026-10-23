import { Component, input } from "@angular/core";

export type VitaeTitleData = {
    name: string;
    title: string;
};

@Component({
    selector: "vitae-title",
    template: `
        <h1>{{ data().name }}</h1>
        <p>{{ data().title }}</p>
    `,
    styles: `
        :host { display: block; }

        h1 {
            margin: 0 0 0.15em;
            color: var(--vitae-accent);
            font-family: Arial, sans-serif;
            font-size: 2em;
            line-height: 1.15;
        }

        p {
            margin: 0;
            font-size: 1em;
            line-height: 1.3;
        }
    `,
})
export class VitaeTitle {
    data = input.required<VitaeTitleData>();
}
