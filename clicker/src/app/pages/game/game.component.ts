import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public userName: string | null = '';
  public clickPotatoes = 0;
  public autoClickerBaseCost = 50;
  public buttonLabel = 'Añadir patatas';
  public buttonMoreLabel = 'Extra patatas';
  public disableAutoClickerButton = true;

  constructor( private readonly localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.userName = this.localStorageService.getUserName();
  }

  addPotatoes(): void {
    this.clickPotatoes = this.clickPotatoes + 1;
    this.updateAutoClicker();
  }

  extraPotatoes(): void {
    this.runAutoClicker();
    this.disableAutoClickerButton = true;
  }

  private updateAutoClicker(): void {
    if (this.clickPotatoes  % 10 === 2) {
      this.disableAutoClickerButton = false;
    }
  }

  private runAutoClicker(): void {

    [0,1,2,3,4,5,6,7].forEach(index =>{
      this.addPotatoes();
    })
  }

  // private autoClickerCost() {
  //   if (this.clickPotatoes = this.autoClickerBaseCost + this.autoClickerBaseCost * this.clickPotatoes) {
  //     this.disabledStatus = false;
  //   }
  // }
}
