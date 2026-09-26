import { TemplateRef } from "@angular/core";
import { DPI } from "./types";

export const dpi = {
    72: {
        dpi: 72,
        widthPx: 595,
        heightPx: 842
    } as DPI,
    96: {
        dpi: 96,
        widthPx: 794,
        heightPx: 1123
    } as DPI,
    150: {
        dpi: 150,
        widthPx: 1240,
        heightPx: 1754
    } as DPI,
    300: {
        dpi: 300,
        widthPx: 2480,
        heightPx: 3508
    } as DPI,
    600: {
        dpi: 600,
        widthPx: 4961,
        heightPx: 7016
    } as DPI
} as const

export const colors = {
    accentContent: "#056063",
    accentSidebar: "#c9f0ea",
    bgContent: "#e4f6ff",
    bgSidebar: "163a59",
}