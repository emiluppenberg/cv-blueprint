import { Component, input } from "@angular/core";
import { Home } from "../svg/home";
import { Phone } from "../svg/phone";
import { Mail } from "../svg/mail";
import { LinkedIn } from "../svg/linkedin";
import { GitHub } from "../svg/github";

@Component({
    selector: "cv-sidebar-contact",
    template: `
        <div class="contact-row">
            <home />
            <div>
                <p>{{address()}}</p>
                <p>{{postalCode()}} {{city()}}</p>
            </div>
        </div>
        <div class="contact-row">
            <phone />
            <p>
                <a [attr.href]="'tel:+46' + telephone().substring(1)">{{telephone()}}</a>
            </p>
        </div>
        <div class="contact-row">
            <mail />
            <p>
                <a [attr.href]="'mailto:' + email()">{{email()}}</a>
            </p>
        </div>
        <div class="contact-row">
            <linkedin />
            <p>
                <a [attr.href]="linkedin()">LinkedIn</a>
            </p>
        </div>
        <div class="contact-row">
            <github />
            <p>
                <a [attr.href]="github()">GitHub</a>
            </p>
        </div>
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            gap: 0.5em;
        }

        p {
            margin: 0;
        }

        .contact-row {
            display: flex;
            gap: 2em;
            align-items: center;

            div > p {
                color: white;
            }
        }
    `,
    imports: [Home, Phone, Mail, LinkedIn, GitHub]
})
export class CvSidebarContact{
    address = input.required<string>()
    postalCode = input.required<string>()
    city = input.required<string>()
    telephone = input.required<string>()
    email = input.required<string>()
    linkedin = input.required<string>()
    github = input.required<string>()
}