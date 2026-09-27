import { Component, input } from "@angular/core";
import { Mail } from "../svg/mail";
import { Phone } from "../svg/phone";

export type SidebarReferenceData = {
    name: string
    role: string
    company: string
    relation: string
    email: string
    telephone: string
}

@Component({
    selector: "cv-sidebar-reference",
    template: `
        <h4>{{reference().name}}</h4>

        <div class="reference-grid">
            <p>Befattning:</p>
            <p>{{reference().role}}</p>
        </div>
        
        <div class="reference-grid">
            <p>Företag:</p>
            <p>{{reference().company}}</p>
        </div>
            
        <div class="reference-grid">
            <p>Relation:</p>
            <p>{{reference().relation}}</p>
        </div>

        <div class="reference-grid">
            <mail />
            <a [attr.href]="'mailto:' + reference().email">
                <p>{{reference().email.split("@")[0]}}</p>
                <p>@{{reference().email.split("@")[1]}}</p>
            </a>
        </div>

        <div class="reference-grid">
            <phone />
            <a [attr.href]="'tel:+46' + reference().telephone.substring(1)">
                <p>{{reference().telephone}}</p>
            </a>
        </div>
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            gap: 0.5em;
            padding-bottom: 0.5em;
            border-bottom: solid 0.1em white;
        }

        h4, p {
            margin: 0;
            font-weight: bold;
            color: white;
        }

        p {
            font-size: 0.8em;
        }

        .reference-grid {
            display: grid;
            grid-template-columns: 4.5em 1fr;
            align-items: center;
            justify-items: start;
        }
    `,
    imports: [Mail, Phone],
})
export class CvSidebarReference {
    reference = input.required<SidebarReferenceData>()
}