import { Component } from "@angular/core";

@Component({
    selector: "vitae-page",
    template: `<ng-content />`,
    styles: `
        :host {
            --vitae-accent: #b85800;
            --vitae-rule: #c9c9c9;
            --vitae-bullet: #9b72c9;
            display: grid;
            grid-template-columns: minmax(0, 1fr) 12.85em;
            gap: 0.9em;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 2.35em 1.55em 2.35em 2.8em;
            background: white;
            color: #3f4a58;
            font-family: Calibri, Arial, sans-serif;
            line-height: 1.28;
        }
    `,
})
export class VitaePage {}
