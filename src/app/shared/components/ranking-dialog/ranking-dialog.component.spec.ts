import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDialogComponent } from './ranking-dialog.component';

describe('RankingDialogComponent', () => {
  let component: RankingDialogComponent;
  let fixture: ComponentFixture<RankingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingDialogComponent ]
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
