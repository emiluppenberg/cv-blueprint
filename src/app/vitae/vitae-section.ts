import { Component, input } from "@angular/core";

@Component({
    selector: "vitae-section",
    template: `
        <section [attr.aria-label]="heading()">
            <h2 [class.sidebar]="variant() === 'sidebar'">{{ heading() }}</h2>
            <div class="items" [style.gap.em]="gap()"><ng-content /></div>
        </section>
    `,
    styles: `
        :host { display: block; min-width: 0; }

        h2 {
            width: 85%;
            margin: 0 0 0.95em;
            padding-bottom: 1.15em;
            border-bottom: 0.065em solid var(--vitae-rule);
            color: var(--vitae-accent);
            font-family: Arial, sans-serif;
            font-size: 0.8em;
            line-height: 1.2;
            font-weight: 700;
            text-transform: uppercase;
        }

        h2.sidebar { width: 100%; }

        .items {
            display: flex;
            flex-direction: column;
            gap: 0.9em;
        }
    `,
})
export class VitaeSection {
    heading = input.required<string>();
    variant = input<"content" | "sidebar">("content");
    gap = input(0.9);
}
