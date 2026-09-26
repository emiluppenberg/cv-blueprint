import { Component, input } from "@angular/core";
import { CvContentSectionItem, CvSectionItemData} from "./cv-content-section-item";

@Component({
    selector: "cv-content-section",
    template: `
        <h3>{{heading()}}</h3>
        @for (sectionItem of sectionItems(); track $index){
            <cv-content-section-item
                [headings]="sectionItem.headings"
                [paragraphLight]="sectionItem.paragraphLight"
                [content]="sectionItem.content"
                [contentBullets]="sectionItem.contentBullets"
                [emphasize]="sectionItem.emphasize"/>
        }
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
        
        h3 {
            border-bottom-color: var(--accent-content);
        }
    `,
    imports: [CvContentSectionItem]
})
export class CvContentSection{
    heading = input.required<string>()
    sectionItems = input.required<CvSectionItemData[]>()
}