import { Component } from "@angular/core";

@Component({
    selector: "cv-sidebar",
    template: `
        <ng-content/>    
    `,
    styles: `
    :host {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
        background-color: var(--bg-sidebar);
    }
    `
})
export class CvSidebar {
}