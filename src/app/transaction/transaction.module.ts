
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { CustomModalModule } from '../demo/components/custom-modal/custom-modal.module';
import { CustomButtonModule } from '../demo/components/custom-button/custom-button.module';
import { CustomTableModule } from '../demo/components/custom-table/custom-table.module';

@NgModule({
    imports: [
       CommonModule,
       TransactionRoutingModule,
       CustomTableModule,
       CustomModalModule,
       CustomButtonModule
    ],
    declarations: [
        TransactionComponent, 
    ]
})
export class TransactionModule { }
