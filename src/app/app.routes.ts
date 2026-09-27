import { Routes } from '@angular/router';
import { Cv } from '../cv/cv';

export const routes: Routes = [
    {
        path: ":id",
        component: Cv
    }
];
