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
        h3 {
            width: fit-content;
            font-size: 2em;
            font-weight: bold;
            border-bottom: 0.1em solid var(--accent-content);
            margin-top: 0;
            margin-bottom: 0.5em;
        }
    `,
    imports: [CvContentSectionItem]
})
export class CvContentSection{
    heading = input.required<string>()
    sectionItems = input.required<CvSectionItemData[]>()
}