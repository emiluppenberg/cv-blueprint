import { Component, input } from "@angular/core";

@Component({
    selector: "cv-section",
    template: `
        <h3 [class]="variant()">{{heading()}}</h3>

        <div 
        class="section"
        [style.gap.em]="gap()">
            <ng-content />
        </div>
    `,
    styles: `
        .section {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
        
        h3 {
            font-size: 1.6em;
            margin-bottom: 0.5em;

            &.content {
                padding-left: 1.2em;
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
    gap = input<number>()
}