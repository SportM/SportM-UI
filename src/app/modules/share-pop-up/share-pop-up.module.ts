import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {
  MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShareModule} from '../share/share.module';



@NgModule({
  declarations: [PopupNewTrainingComponent],
  imports: [
    CommonModule,
    ShareModule,
  ],
  entryComponents: [PopupNewTrainingComponent],
  exports: [PopupNewTrainingComponent]
})
export class SharePopUpModule { }
