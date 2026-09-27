import { Component, inject, signal, Type } from "@angular/core";
import { CvService } from "../services/cv-service";
import { NgComponentOutlet } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "cv-container",
    template: `
        @for (page of pages(); track $index){
            <div 
                class="container"
                [attr.id]="'cv-' +$index"
                [style.--dpi-scale]="cvService.dpi().dpi / 72"
                [style.width.px]="cvService.dpi().widthPx" 
                [style.height.px]="cvService.dpi().heightPx">
                <ng-container [ngComponentOutlet]="page"/>
            </div>
        }
    `,
    styles: `
    :host {
        display:flex;
        gap: 20px;
    }

    .container {
        flex: none;
        box-sizing: border-box;
        border: 1px solid black;
        font-size: calc(12px * var(--dpi-scale))
    }
    `,
    imports: [NgComponentOutlet]
})
export class CvContainer {
    public readonly cvService = inject(CvService)
    private activatedRoute = inject(ActivatedRoute)

    pages  = signal<Type<unknown>[] | null>(null)

    constructor() {
        this.activatedRoute.params.subscribe(async (params) => {
                const module = await import(`../cvs/${params["id"]}/index.ts`)
                this.pages.set(module.pages)
        })
    }
}