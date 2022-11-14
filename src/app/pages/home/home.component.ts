import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RankingDialogComponent } from 'src/app/shared/components/ranking-dialog/ranking-dialog.component';
import { PotatoesService } from 'src/app/shared/services/potatoes-service/potatoes-service.service';
import { StorageService } from 'src/app/shared/services/storage-service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public form: FormGroup;
  public rankingPotatoData: any;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private readonly _fb: FormBuilder,
    private readonly potatoesService: PotatoesService,
    private readonly storageService: StorageService,
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required]]
    })
  }

  goToGamePage() {
    if(this.form.status === 'VALID') {
      this.potatoesService.initGame(this.form.value.name);
      this.router.navigate(['/game']);
    }
  }

  rankingCall() {
    this.rankingPotatoData = this.storageService.allItemsFromStorage();
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(RankingDialogComponent, {
      data: this.rankingPotatoData
    });
  }
}
