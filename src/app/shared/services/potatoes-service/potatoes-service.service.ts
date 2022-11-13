import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, timer, takeUntil } from 'rxjs';
import { PotatoSession } from '../../models/potato-session-model';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PotatoesService {

  public autoClickerCost = 10;
  public exitSubject = new Subject();
  public potatoesBehaviourSubject = new BehaviorSubject(0);
  public disableAutoClickerButtonBehaviourSubject = new BehaviorSubject(true);
  private potatoData: PotatoSession =
  { name: '',
    score: 0,
    numAutoClickers: 0};
  private autoClickerBaseCost = 50;
  private isLoaded: boolean = false;


  constructor(private storageService: StorageService) {}

  initGame(userName: string): void {
    this.potatoData = this.storageService.loadSession(userName);
    if(this.potatoData.numAutoClickers>0) {
      this.runAutoClicker();
    }
    this.isLoaded = true;
  }

  getCurrentPotatoData(): PotatoSession {
    return this.potatoData;
  }

  isSessionLoaded(): boolean {
    return this.isLoaded;
  }

  addPotatoes(numClicks = 1): void {
    this.potatoData.score += numClicks;
    this.potatoesBehaviourSubject.next(this.potatoData.score);
    this.updateAutoClicker();
  }

  extraPotatoes(): void {
    this.potatoData.score = 0;
    this.potatoData.numAutoClickers += 1;
    this.disableAutoClickerButtonBehaviourSubject.next(true);
    this.runAutoClicker();
  }

  exitSession(data: PotatoSession): void {
    this.exitSubject.next(true);
    this.storageService.saveSession(data);
    this.isLoaded = false;
  }

  private updateAutoClicker(): void {
    this.autoClickerCost = this.autoClickerBaseCost + this.autoClickerBaseCost * this.potatoData.numAutoClickers;
    if (this.potatoData.score  >= this.autoClickerCost) {
      this.disableAutoClickerButtonBehaviourSubject.next(false);
    }
  }

  private runAutoClicker(): void {
    const source = timer(0, 100);
    source.pipe(takeUntil(this.exitSubject)).subscribe(val => this.addPotatoes(this.potatoData.numAutoClickers));
  }

}
