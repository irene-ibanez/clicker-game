import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomUnitsPipe } from './pipes/custom-units/custom-units.pipe';



@NgModule({
  declarations: [
    RaisedButtonComponent,
    CustomUnitsPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    RaisedButtonComponent,
    ReactiveFormsModule,
    CustomUnitsPipe
  ]
})
export class SharedModule { }
