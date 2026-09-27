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
            <chevron variant="sidebar" />
            <h4>
                <a [attr.href]="'https://' + project().url">{{project().url}}</a>
            </h4>
        </div>

        <div class="content">  
            <div class="light">{{project().tech}}</div>
            <p class="description">{{project().content}}</p>
        </div>
    `,
    styles: `
        h4 {
            margin: 0;
            color: var(--accent-sidebar);
        }

        a {
            border-bottom-color: var(--accent-sidebar);
        }
        
        .item-head {
            display: grid;
            grid-template-columns: 2em 1fr;
            align-items: center;
            justify-items: start;
        }
        
        .content {
            border-left: 0.1em solid var(--accent-sidebar);
            margin-left: 0.8em;
            padding-left: 1.2em;
            
            li {
                margin-bottom: 0.5em;
            }
            
            p, span, .light {
                color: white;
            }
        }

        .description {
            font-size: 0.8em;
            line-height: 1.4;
        }
    `,
    imports: [Chevron]
})
export class CvSidebarProject {
    project = input.required<SidebarProjectData>()
}