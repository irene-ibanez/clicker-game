import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RaisedButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    RaisedButtonComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
