import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CvService } from '../services/cv-service';
import { dpi } from "../utilities/const"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  template: `
      <header>
        <nav>
          <a routerLink="/cv">CV</a>
        </nav>
        <button (click)="downloadPdf()">PDF</button>
        <select
          aria-label="DPI"
          [value]="cvService.dpi().dpi"
          (change)="setDpi($event)"
        >
          @for (option of dpiOptions; track option.dpi) {
            <option [value]="option.dpi">{{ option.dpi }} DPI</option>
          }
        </select>
      </header>

      <router-outlet />
`,
})
export class App {
  protected readonly title = signal('cv-ang');
  protected cvService = inject(CvService)
  protected readonly dpiOptions = Object.values(dpi)

  protected setDpi(event: Event) {
    const selectedDpi = Number((event.target as HTMLSelectElement).value)
    const option = this.dpiOptions.find(({ dpi }) => dpi === selectedDpi)

    if (option) {
      this.cvService.dpi.set(option)
    }
  }

  downloadPdf = async () => {
    const cv = document.getElementById("cv")

    if (cv) {
      const canvas = await html2canvas(cv, {
        scale: 1,
        backgroundColor: "#fff"
      })

      const doc = new jsPDF({
        unit: "px",
        format: "a4",
        hotfixes: ["px_scaling"]
      })

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const scale = Math.min(
        pageWidth / canvas.width,
        pageHeight / canvas.height,
      );

      const imageWidth = canvas.width * scale;
      const imageHeight = canvas.height * scale;

      const x = (pageWidth - imageWidth) / 2;
      const y = (pageHeight - imageHeight) / 2;

      doc.addImage(
        canvas,
        "PNG",
        x,
        y,
        imageWidth,
        imageHeight,
      );

      doc.save("cv.pdf")
    }
  }
}
