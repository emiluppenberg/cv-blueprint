import { Component, inject, signal, Type } from "@angular/core";
import { DocumentService } from "../services/document-service";
import { NgComponentOutlet } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "document-container",
    template: `
        @for (page of pages(); track $index){
            <div 
                class="container"
                [attr.id]="'document-' +$index"
                [style.--dpi-scale]="documentService.dpi().dpi / 72"
                [style.width.px]="documentService.dpi().widthPx" 
                [style.height.px]="documentService.dpi().heightPx">
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
export class DocumentContainer {
    public readonly documentService = inject(DocumentService)
    private activatedRoute = inject(ActivatedRoute)

    pages  = signal<Type<unknown>[] | null>(null)

    constructor() {
        this.activatedRoute.params.subscribe(async (params) => {
                const module = await import(`../documents/${params["id"]}/index.ts`)
                this.pages.set(module.pages)
                this.documentService.pagesCount.set(module.pages.length)
        })
    }
}