import { Component, input } from "@angular/core";

export type CoverLetterHeaderData = {
    label: string;
    name: string;
    address: string;
    postalCode: string;
    city: string;
    telephone: string;
    telephoneHref: string;
    email: string;
    linkedin: string;
};

@Component({
    selector: "cover-letter-header",
    template: `
        <header>
            <div class="identity">
                <p class="label">{{ data().label }}</p>
                <h1>{{ data().name }}</h1>
            </div>
            <address>
                <div class="postal">
                    <p>{{ data().address }}</p>
                    <p>{{ data().postalCode }} {{ data().city }}</p>
                </div>
                <div class="links">
                    <a [href]="'tel:' + data().telephoneHref">{{ data().telephone }}</a>
                    <a [href]="'mailto:' + data().email">{{ data().email }}</a>
                    <a [href]="data().linkedin">LinkedIn</a>
                </div>
            </address>
        </header>
    `,
    styles: `
        :host { display: block; color: var(--brev-ink); }

        header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: end;
            gap: 1em;
            padding-bottom: 0.65em;
            border-bottom: 0.065em solid var(--brev-rule);
        }

        .label {
            margin: 0 0 1em;
            font-family: Calibri, Arial, sans-serif;
            font-size: 0.72em;
            font-weight: 700;
            letter-spacing: 0.25em;
            line-height: 1.2;
            text-transform: uppercase;
        }

        h1 { margin: 0; font-size: 2.5em; line-height: 1.2; }

        address {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            gap: 1.5em;
            font-family: Calibri, Arial, sans-serif;
            font-size: 0.8em;
            font-style: normal;
            letter-spacing: 0.07em;
            line-height: 1.8;
        }

        p { margin: 0; line-height: inherit; }
        .postal { white-space: nowrap; color: #4c6274; }
        .links { display: flex; flex-direction: column; min-width: 0; }

        a { color: inherit; padding: 0; border: 0; text-decoration: none; overflow-wrap: anywhere; }
        a:hover { text-decoration: underline; }
        a:focus-visible { outline: 0.12em solid var(--brev-ink); outline-offset: 0.15em; }
    `,
})
export class CoverLetterHeader {
    data = input.required<CoverLetterHeaderData>();
}
