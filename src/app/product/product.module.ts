
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { CustomTableModule } from '../demo/components/custom-table/custom-table.module';
import { CustomModalModule } from '../demo/components/custom-modal/custom-modal.module';
import { CustomButtonModule } from '../demo/components/custom-button/custom-button.module';

@NgModule({
    imports: [
       ProductRoutingModule,
       CommonModule,
       CustomTableModule,
       CustomModalModule,
       CustomButtonModule
    ],
    declarations: [
        ProductComponent, 
    ]
})
export class ProductModule { }
