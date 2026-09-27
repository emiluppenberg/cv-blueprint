import { Component, input } from "@angular/core";
import { Chevron } from "../svg/chevron";

export type SidebarProjectData = {
    url: string
    tech: string
    content: string
}

@Component({
    selector: "cv-sidebar-project",
    template: `
        <div class="item-head">
            <chevron variant="content" />
            <h4>{{project().url}}</h4>
        </div>

        <div class="content">  
            <p class="light">{{project().tech}}</p>
            <p>{{project().content}}</p>
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

            li {
                margin-bottom: 0.5em;
            }
        }
    `,
    imports: [Chevron]
})
export class CvSidebarProject {
    project = input.required<SidebarProjectData>()
}