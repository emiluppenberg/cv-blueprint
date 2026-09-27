import { Component } from "@angular/core";

@Component({
    selector: "cv-content",
    template: `
    <ng-content />
    `,
    styles: `
    :host {
        display: flex;
        flex-direction: column;
        padding: 1em;
        gap: 1em;
        background-color: var(--bg-content);
    }
    `
})
export class CvContent {

}