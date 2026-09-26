import { Component, input } from "@angular/core";
import { Chevron } from "../svg/chevron";

export type CvSectionItemData = {
    headings: string[]
    paragraphLight: string
    content?: string
    contentBullets?: string[]
    emphasize?: string
}

@Component({
    selector: "cv-content-section-item",
    template: `
        <div class="item-head">
            <chevron variant="content" />
            
            <div class="headings">
            @for (heading of headings(); track $index){
                @if ($index === headings().length - 1) {
                    <h4 class="emphasize">{{heading}}</h4>
                } @else {
                    <h4>{{heading}}</h4>
                }
            }
            </div>
        </div>

        <div class="content">  
            <p class="light">{{paragraphLight()}}</p>

            @if (content()) {
                <p>{{content()}}</p>
            }

            @if (contentBullets()) {
                <ul>
                @for (bullet of contentBullets(); track $index) {
                    <li>{{bullet}}</li>
                }
                </ul>
            }

            @if (emphasize()){
                <p class="emphasize">{{emphasize()}}</p>
            }
        </div>
    `,
    styles: `
        h4 {
            margin: 0;
        }

        .item-head {
            display: grid;
            grid-template-columns: 2em 1fr;
            align-items: center;
        }

        .content {
            border-left: 0.1em solid var(--accent-content);
            margin-left: 1em;
            padding-left: 1em;
        }
    `,
    imports: [Chevron]
})
export class CvContentSectionItem {
    headings = input.required<string[]>()
    paragraphLight = input.required<string>()
    content = input<string>()
    contentBullets = input<string[]>()
    emphasize = input<string>()
}