import { Routes } from '@angular/router';
import { Cv } from '../cv/cv';

export const routes: Routes = [
    {
        path: "cv/:id",
        component: Cv
    }
];
