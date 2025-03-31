import { Routes } from '@angular/router';
import { DragDropListsComponent } from './drag-drop-lists/drag-drop-lists.component';

export const routes: Routes = [
    { path: '', component: DragDropListsComponent },
    { path: '**', redirectTo: '' }
];
