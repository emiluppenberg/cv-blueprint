import { Component, inject, signal, Type } from "@angular/core";
import { CvService } from "../services/cv-service";
import { NgComponentOutlet } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "cv",
    template: `
    <div 
        class="container"
        id="cv"
        [style.--dpi-scale]="cvService.dpi().dpi / 72"
        [style.width.px]="cvService.dpi().widthPx" 
        [style.height.px]="cvService.dpi().heightPx">
        <ng-container [ngComponentOutlet]="currentPage"/>
    </div>
    `,
    styles: `
    .container {
        box-sizing: border-box;
        border: 1px solid black;
        font-size: calc(12px * var(--dpi-scale))
    }
    `,
    imports: [NgComponentOutlet]
})
export class Cv {
    public readonly cvService = inject(CvService)
    private activatedRoute = inject(ActivatedRoute)

    public currentPage: Type<unknown> | null = null

    constructor() {
        this.activatedRoute.params.subscribe((params) => {
            const index = Number(params["id"]) - 1
            this.currentPage = this.cvService.pages[index]
        })
    }
}