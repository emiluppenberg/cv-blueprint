import { Component, input } from "@angular/core";

export type VitaeContactData = {
    location: string;
    telephone: string;
    email: string;
};

@Component({
    selector: "vitae-contact",
    template: `
        <ul>
            <li>{{ data().location }}</li>
            <li><a [href]="'tel:' + data().telephone">{{ data().telephone }}</a></li>
            <li><a [href]="'mailto:' + data().email">{{ data().email }}</a></li>
        </ul>
    `,
    styles: `
        :host { display: block; }
        ul { margin: 0; padding-left: 0.9em; font-size: 0.78em; line-height: 1.4; }
        li::marker { content: '·  '; }
        a { color: inherit; border: 0; padding: 0; text-decoration: none; overflow-wrap: anywhere; }
        a:hover { text-decoration: underline; }
        a:focus-visible { outline: 0.12em solid var(--vitae-accent); outline-offset: 0.15em; }
    `,
})
export class VitaeContact {
    data = input.required<VitaeContactData>();
}
