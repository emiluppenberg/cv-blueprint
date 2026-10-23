import { Component } from "@angular/core";

@Component({
    selector: "vitae-content",
    template: `<main><ng-content /></main>`,
    styles: `
        :host {
            display: block;
            min-width: 0;
            padding-top: 1.25em;
        }

        main {
            display: flex;
            flex-direction: column;
            gap: 1.25em;
        }
    `,
})
export class VitaeContent {}
