import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData, RankingDialogComponent } from './ranking-dialog.component';

describe('RankingDialogComponent', () => {
  let component: RankingDialogComponent;
  let fixture: ComponentFixture<RankingDialogComponent>;
  const data = [{
    name: '',
    score: 0
  }];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingDialogComponent ],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: data},

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
