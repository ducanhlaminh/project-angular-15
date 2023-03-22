import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
        declarations: [],
        imports: [CommonModule],
        exports: [
                FontAwesomeModule,
                ReactiveFormsModule,
                MatProgressSpinnerModule,
                BrowserAnimationsModule,
                MatInputModule,
                MatPaginatorModule,
                MatFormFieldModule,
                MatChipsModule,
                MatOptionModule,
                MatSelectModule,
                MatSliderModule,
                FormsModule,
        ],
})
export class IconModule {}
