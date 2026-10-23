import { Component, inject, input } from "@angular/core";
import { CvService } from "../services/cv-service";

export type TitleData = {
    name: string
    title: string
    summary: string
    imagePath: string
}

@Component({
    selector: "cv-content-title",
    template: `
    <div class="top">
        <div>
            <h1>{{data().name}}</h1>
            <h2>{{data().title}}</h2>
        </div>
        
        <div class="img-container">
            <img [src]="data().imagePath"/>
        </div>
    </div>

    @if (data().summary.length > 0) {
        <p>
            {{data().summary}}
        </p>
    }
    
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            font-family: 'Arial Narrow';
            font-size: 1.2em;
        }

        .top {
            display: flex;
        }
        
        h1 {
            margin: 0;
        }

        h2 {
            margin: 0;
            margin-left: 0.5em;
        }

        p {
            margin: 0;
            font-size: 0.7em;
        }

        .img-container {
            position: relative;
            margin-left: 0.5em;
            margin-top: -0.5em;

            img {
                position: absolute;
                width: calc(60px * var(--dpi-scale));
                height: auto;
            }
        }
    `
})
export class CvContentTitle {
    data = input.required<TitleData>()

    public readonly cvService = inject(CvService)
}
