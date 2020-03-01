import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupNewTrainingComponent} from '../../components/popup-new-training/popup-new-training.component';
import {ShareModule} from '../share/share.module';
import {
  MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [PopupNewTrainingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,

  ],
  entryComponents: [PopupNewTrainingComponent],
  exports: [PopupNewTrainingComponent]
})
export class SharePopUpModule { }
