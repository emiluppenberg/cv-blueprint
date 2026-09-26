import { Component, input } from "@angular/core";

@Component({
    selector: "cv-content-title",
    template: `
        <h1>{{name()}}</h1>
        <h2>{{title()}}</h2>
    `,
    styles: `
        h1 {
            margin: 0;
        }
        h2 {
            margin: 0;
            margin-left: 0.5em;
        }
    `
})
export class CvContentTitle {
    name = input.required<string>()
    title = input.required<string>()
}