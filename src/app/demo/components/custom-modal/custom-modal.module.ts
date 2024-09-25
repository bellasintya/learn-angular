// custom-table.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './custom-modal.component';

@NgModule({
  declarations: [CustomModalComponent],
  imports: [CommonModule],
  exports: [CustomModalComponent], // Export the component so it can be used elsewhere
})
export class CustomModalModule {}
