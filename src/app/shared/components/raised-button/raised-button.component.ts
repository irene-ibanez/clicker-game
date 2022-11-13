import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss']
})
export class RaisedButtonComponent {

  @Input() buttonLabel!: string;
  @Input() disabledStatus = false;
  @Output() buttonClick = new EventEmitter<boolean>();

  emitEvent(event: boolean): void {
    this.buttonClick.emit(event);
  }

}
