import { Component, inject, input } from "@angular/core";
import { CvService } from "../services/cv-service";

@Component({
    selector: "cv-content-title",
    template: `
    <div>
        <h1>{{name()}}</h1>
        <h2>{{title()}}</h2>
    </div>

    <div class="img-container">
        <img src="bild.png"/>
    </div>
    `,
    styles: `
        :host {
            display: flex;
            gap: 10em;
        }
        
        h1 {
            margin: 0;
        }

        h2 {
            margin: 0;
            margin-left: 0.5em;
        }

        .img-container {
            position: relative;

            img {
                position: absolute;
                width: calc(80px * var(--dpi-scale));
                height: auto;
            }
        }
    `
})
export class CvContentTitle {
    name = input.required<string>()
    title = input.required<string>()
    public readonly cvService = inject(CvService)
}
