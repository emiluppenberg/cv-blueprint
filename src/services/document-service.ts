import { Injectable, signal } from '@angular/core';
import { dpi } from '../utilities/const';
import {  DPI } from '../utilities/types';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  dpi = signal<DPI>(dpi[96])
  pagesCount = signal<number>(0)
}
