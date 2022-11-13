import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, takeUntil, timer } from 'rxjs';
import { PotatoSession } from 'src/app/shared/models/potato-session-model';
import { PotatoesService } from 'src/app/shared/services/potatoes-service/potatoes-service.service';
import { StorageService } from 'src/app/shared/services/storage-service/storage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public potatoData!: PotatoSession;
  public disableAutoClickerButton = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private readonly potatoesService: PotatoesService
  ) { }

  ngOnInit(): void {
    this.potatoData = this.potatoesService.getCurrentPotatoData();

    this.subscriptions.push(this.potatoesService.disableAutoClickerButtonBehaviourSubject.subscribe({
      next: (res: boolean) => this.disableAutoClickerButton = res,
      error: () => {
        console.log('Error en la suscripción del disabled button');
      }
    }));
  }

  addPotatoes(): void {
    this.potatoesService.addPotatoes();
  }

  extraPotatoes(): void {
    this.potatoesService.extraPotatoes();
  }

  exitSession(): void {
    this.potatoesService.exitSession(this.potatoData);
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.router.navigate(['/home'])
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
