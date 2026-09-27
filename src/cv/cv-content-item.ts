import { Component, input } from "@angular/core";
import { Chevron } from "../svg/chevron";

export type ContentItemData = {
    headings: string[]
    paragraphLight: string
    content?: string
    contentBullets?: string[]
    emphasize?: string
}

@Component({
    selector: "cv-content-item",
    template: `
        <div class="item-head">
            <chevron variant="content" />
            
            <div class="headings">
            @for (heading of item().headings; track $index){
                @if ($index === item().headings.length - 1) {
                    <h4 class="emphasize">{{heading}}</h4>
                } @else {
                    <h4>{{heading}}</h4>
                }
            }
            </div>
        </div>

        <div class="content">  
            <div class="light">{{item().paragraphLight}}</div>

            @if (item().content) {
                <p>{{item().content}}</p>
            }

            @if (item().contentBullets) {
                <ul>
                @for (bullet of item().contentBullets; track $index) {
                    <li>{{bullet}}</li>
                }
                </ul>
            }

            @if (item().emphasize){
                <p class="emphasize">{{item().emphasize}}</p>
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
            
            ul {
                margin-top: 0.5em;
            }

            li {
                margin-bottom: 0.5em;
            }
        }

        .emphasize {
            line-height: 1.2;
        }
    `,
    imports: [Chevron]
})
export class CvContentItem {
    item = input.required<ContentItemData>()
}