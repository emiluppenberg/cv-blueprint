import { Component, input } from "@angular/core";

export type CoverLetterContentData = {
    greeting: string;
    paragraphs: string[];
};

@Component({
    selector: "cover-letter-content",
    template: `
        <main>
            <p>{{ data().greeting }}</p>
            @for (paragraph of data().paragraphs; track $index) {
                <p>{{ paragraph }}</p>
            }
        </main>
    `,
    styles: `
        :host { display: block; font-size: 0.92em; line-height: 1.7; }
        main { display: flex; flex-direction: column; gap: 0.65em; }
        p { margin: 0; line-height: inherit; }
    `,
})
export class CoverLetterContent {
    data = input.required<CoverLetterContentData>();
}
