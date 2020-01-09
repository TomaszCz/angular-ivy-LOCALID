import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FnDatePipe } from './date.pipe';

@NgModule({
    declarations: [FnDatePipe],
    exports: [
        FnDatePipe
    ],
    imports: [
        CommonModule
    ],
    providers: [
        FnDatePipe
    ]
})
export class FnDateModule { }
