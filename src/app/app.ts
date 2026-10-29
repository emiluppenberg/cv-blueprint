import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { DocumentService } from '../services/document-service';
import { dpi } from "../utilities/const"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
      <header>
        <nav>
          <button (click)="downloadPdf()">PDF</button>
          <select
            aria-label="DPI"
            [value]="documentService.dpi().dpi"
            (change)="setDpi($event)"
          >
            @for (option of dpiOptions; track option.dpi) {
              <option [value]="option.dpi" [selected]="option.dpi === 96">{{ option.dpi }} DPI</option>
            }
          </select>
        </nav>
      </header>

      <router-outlet />
`,
})
export class App {
  protected documentService = inject(DocumentService)
  protected readonly dpiOptions = Object.values(dpi)

  protected setDpi(event: Event) {
    const selectedDpi = Number((event.target as HTMLSelectElement).value)
    const option = this.dpiOptions.find(({ dpi }) => dpi === selectedDpi)

    if (option) {
      this.documentService.dpi.set(option)
    }
  }

  downloadPdf = async () => {
    if (this.documentService.pagesCount() === 0) return

    const pdf = new jsPDF({
      unit: "px",
      format: "a4",
      hotfixes: ["px_scaling"]
    })

    for (let i = 0; i < this.documentService.pagesCount(); i++) {
      const doc = document.getElementById(`document-${i}`)

      if (!doc) {
        throw new Error(`Document page ${i} was not found in the DOM`)
      }

      const canvas = await html2canvas(doc, {
        scale: 1,
        backgroundColor: "#fff"
      })

      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      const scale = Math.min(
        pageWidth / canvas.width,
        pageHeight / canvas.height,
      )

      const imageWidth = canvas.width * scale
      const imageHeight = canvas.height * scale

      const x = (pageWidth - imageWidth) / 2
      const y = (pageHeight - imageHeight) / 2

      pdf.addImage(
        canvas,
        "PNG",
        x,
        y,
        imageWidth,
        imageHeight,
        `document-page-${i}`,
        "FAST"
      )

      const pageRect = doc.getBoundingClientRect()
      const pdfScaleX = imageWidth / pageRect.width
      const pdfScaleY = imageHeight / pageRect.height

      for (const anchor of Array.from(doc.querySelectorAll<HTMLAnchorElement>('a[href]'))) {
        for (const rect of Array.from(anchor.getClientRects())) {
          pdf.link(
            x + (rect.left - pageRect.left) * pdfScaleX,
            y + (rect.top - pageRect.top) * pdfScaleY,
            rect.width * pdfScaleX,
            rect.height * pdfScaleY,
            { url: anchor.href },
          )
        }
      }

      if (i < this.documentService.pagesCount() - 1) {
        pdf.addPage(
          "a4",
          "portrait",
        )
      }
    }

    const name = window.location.pathname.substring(1)
    pdf.save(`${name}.pdf`)
  }
}
