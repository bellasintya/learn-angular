// custom-table.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table.component';
import { CustomButtonModule } from '../custom-button/custom-button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomTableComponent],
  imports: [CommonModule, CustomButtonModule, FormsModule],
  exports: [CustomTableComponent], // Export the component so it can be used elsewhere
})
export class CustomTableModule {}
