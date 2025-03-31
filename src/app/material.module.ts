import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    exports: [
        DragDropModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatDividerModule
    ]
})
export class MaterialModule { } 