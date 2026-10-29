import { Component, input } from "@angular/core";

export type CoverLetterApplicationData = {
    role: string;
    recipient: string;
    recipientRole: string;
    recipientCompany: string;
    reference: string;
};

@Component({
    selector: "cover-letter-application",
    template: `
        <dl>
            <div>
                <dt>Till</dt>
                <dd>
                    {{ data().recipient }}
                    @if (data().recipientRole.length > 0){
                        <br/>{{data().recipientRole}}
                    }
                    @if (data().recipientCompany.length > 0){
                        <br/>{{data().recipientCompany}}
                    }
                </dd>
            </div>
            <div>
                <dt>Sökt tjänst</dt>
                <dd>
                    {{ data().role }}
                    @if(data().reference.length > 0){
                        <span>{{ data().reference }}</span>
                    }
                </dd>
            </div>
        </dl>
    `,
    styles: `
        :host { display: block; margin-top: -1.05em; color: var(--brev-ink); }

        dl {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1em;
            margin: 0;
            padding: 0 0.3em 0.65em;
            border-bottom: 0.065em solid var(--brev-rule);
        }

        dt {
            margin-bottom: 0.4em;
            color: #4c6274;
            font-family: Calibri, Arial, sans-serif;
            font-size: 0.66em;
            font-weight: 700;
            letter-spacing: 0.2em;
            line-height: 1.3;
            text-transform: uppercase;
        }

        dd { margin: 0; font-family: "Courier New", monospace; font-size: 0.9em; line-height: 1.75; }
    `,
})
export class CoverLetterApplication {
    data = input.required<CoverLetterApplicationData>();
}
