import { Injectable, signal } from '@angular/core';
import { dpi } from '../utilities/const';
import {  DPI } from '../utilities/types';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  dpi = signal<DPI>(dpi[72])
  cvPagesLength = signal<number>(0)
}
