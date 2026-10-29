import { NgOptimizedImage } from "@angular/common";
import { Component, input } from "@angular/core";

export type CoverLetterSignatureData = {
    closing: string;
    name: string;
    signaturePath: string;
    date: string;
};

@Component({
    selector: "cover-letter-signature",
    imports: [NgOptimizedImage],
    template: `
        <footer>
            <div class="closing">
                <p>{{ data().closing }}</p>
                <p><strong>{{ data().name }}</strong></p>
            </div>
            <div class="signature">
                <img [ngSrc]="data().signaturePath" fill [alt]="'Namnteckning: ' + data().name" />
            </div>
            <time [attr.datetime]="dateTime()">{{ swedishDate() }}</time>
        </footer>
    `,
    styles: `
        :host { display: block; margin-top: auto; }

        footer {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 17.2em minmax(0, 1fr);
            align-items: center;
            gap: 0.8em;
            color: var(--brev-ink);
        }

        .closing { font-size: 0.875em; font-style: italic; line-height: 1.7; }
        p { margin: 0; line-height: inherit; }
        .signature { position: relative; height: 3.5em; }
        img { object-fit: contain; }
        time { text-align: right; font-size: 0.8em; white-space: nowrap; }
    `,
})
export class CoverLetterSignature {
    data = input.required<CoverLetterSignatureData>();

    swedishDate = () =>
        new Intl.DateTimeFormat('sv-SE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(Date.now());

    dateTime = () =>
        new Intl.DateTimeFormat('sv-SE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(Date.now());
}
