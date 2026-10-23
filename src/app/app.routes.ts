import { Routes } from '@angular/router';
import { DocumentContainer } from './document-container';

export const routes: Routes = [
    {
        path: ":id",
        component: DocumentContainer
    }
];
