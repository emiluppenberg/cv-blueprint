import { Component, input } from "@angular/core";

@Component({
    selector: "cv-section",
    template: `
        <h3 [class]="variant()">{{heading()}}</h3>

        <ng-content />
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
        
        h3 {

            &.content {
                border-bottom-color: var(--accent-content);
            }

            &.sidebar {
                width: 100%;
                color: white;
                border-bottom-color: white;
            }
        }
    `,
})
export class CvSection{
    heading = input.required<string>()
    variant = input.required<"content" |"sidebar">()
}