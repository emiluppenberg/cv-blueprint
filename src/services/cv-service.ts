import { computed, Injectable, signal, Type } from '@angular/core';
import { dpi } from '../utilities/const';
import {  DPI } from '../utilities/types';
import { Page1 } from '../cv/pages/page1';
import { Page2 } from '../cv/pages/page2';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  dpi = signal<DPI>(dpi[72])
  pages: Type<unknown>[] = [Page1, Page2]
}
