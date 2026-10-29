import { Component } from "@angular/core";

@Component({
    selector: "cover-letter-page",
    template: `<article lang="sv" aria-label="Personligt brev"><ng-content /></article>`,
    styles: `
        :host {
            --brev-ink: #123451;
            --brev-rule: #dce5ec;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 7.2em 0;
            background: linear-gradient(90deg, #b9d8ed, #345f81);
            color: #101820;
            font-family: "Times New Roman", Georgia, serif;
        }

        article {
            display: flex;
            flex-direction: column;
            gap: 1.35em;
            box-sizing: border-box;
            width: 100%;
            min-width: 0;
            min-height: 55.75em;
            padding: 2.35em 2.65em 2.95em;
            border-block: 0.45em solid #173d5b;
            border-radius: 1.1em;
            background: #fcfcfc;
        }
    `,
})
export class CoverLetterPage {}
