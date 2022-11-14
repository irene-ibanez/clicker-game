import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string,
  score: number
}


@Component({
  selector: 'app-ranking-dialog',
  templateUrl: './ranking-dialog.component.html',
  styleUrls: ['./ranking-dialog.component.scss']
})
export class RankingDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData[]) {}

}


