import { Routes } from '@angular/router';
import { CvContainer } from './cv-container';

export const routes: Routes = [
    {
        path: ":id",
        component: CvContainer
    }
];
