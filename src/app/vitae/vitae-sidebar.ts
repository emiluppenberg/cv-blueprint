import { Component } from "@angular/core";

@Component({
    selector: "vitae-sidebar",
    template: `<aside aria-label="Additional information"><ng-content /></aside>`,
    styles: `
        :host {
            display: block;
            min-width: 0;
            background: #fff2e3;
            padding: 1.2em;
        }

        aside {
            display: flex;
            flex-direction: column;
            gap: 1.35em;
        }
    `,
})
export class VitaeSidebar {}
