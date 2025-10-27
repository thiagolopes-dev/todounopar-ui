import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
    exports: [
        ButtonModule,
        CheckboxModule,
        ConfirmDialogModule
    ]
})
export class PrimeNGModule { }