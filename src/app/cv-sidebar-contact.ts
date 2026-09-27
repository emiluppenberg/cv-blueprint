import { Component, input } from "@angular/core";
import { Home } from "../svg/home";
import { Phone } from "../svg/phone";
import { Mail } from "../svg/mail";
import { LinkedIn } from "../svg/linkedin";
import { GitHub } from "../svg/github";

export type ContactData = {
    address: string
    postalCode: string
    city: string
    email: string
    telephone: string
    linkedin: string
    github: string
}

@Component({
    selector: "cv-sidebar-contact",
    template: `
        <div class="contact-row">
            <home />
            <div>
                <p>{{contact().address}}</p>
                <p>{{contact().postalCode}} {{contact().city}}</p>
            </div>
        </div>
        <div class="contact-row">
            <mail />            
            <a [attr.href]="'mailto:' + contact().email">
                <p>{{contact().email.split("@")[0]}}</p>
                <p>@{{contact().email.split("@")[1]}}</p>
            </a>
        </div>
        <div class="contact-row">
            <phone />
            <p>
                <a [attr.href]="'tel:+46' + contact().telephone.substring(1)">{{contact().telephone}}</a>
            </p>
        </div>
        <div class="contact-row">
            <linkedin />
            <p>
                <a [attr.href]="contact().linkedin">LinkedIn</a>
            </p>
        </div>
        <div class="contact-row">
            <github />
            <p>
                <a [attr.href]="contact().github">GitHub</a>
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
    contact = input.required<ContactData>()
}