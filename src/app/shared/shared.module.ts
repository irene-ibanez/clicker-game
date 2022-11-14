import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomUnitsPipe } from './pipes/custom-units/custom-units.pipe';
import { RankingDialogComponent } from './components/ranking-dialog/ranking-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    RaisedButtonComponent,
    CustomUnitsPipe,
    RankingDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    RaisedButtonComponent,
    ReactiveFormsModule,
    CustomUnitsPipe
  ]
})
export class SharedModule { }
