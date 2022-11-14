import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PotatoSession } from 'src/app/shared/models/potato-session-model';
import { PotatoesService } from 'src/app/shared/services/potatoes-service/potatoes-service.service';
import { loadFull } from 'tsparticles';
import { Container, Engine, MoveDirection } from 'tsparticles-engine';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public potatoData!: PotatoSession;
  public disableAutoClickerButton = true;
  private subscriptions: Subscription[] = [];
  id = "tsparticles";
  particlesOptions = {
    background: {
        color: "#333",
    },
    particles: {
      move: {
        direction: MoveDirection.bottom,
        enable: true,
        random: false,
        straight: false,
      },
        color: {
        value: "#EFB810"
      },
      opacity: {
        value: { min: 0.5, max: 0.8 },
      },
      size: {
        value: { min: 1, max: 10 },
      },

      wobble: {
        distance: 20,
        enable: true,
        speed: {
          min: -5,
          max: 5,
        },
      },
      shape: {
        options: {
          image: [
            {
              src: "/assets/images/patata.png",
              width: 32,
              height: 32
            }
          ]
        }
      },
    }
};
  constructor(
    private readonly router: Router,
    private readonly potatoesService: PotatoesService
  ) { }

  ngOnInit(): void {
    this.potatoData = this.potatoesService.getCurrentPotatoData();

    if(this.potatoesService.disableAutoClickerButtonBehaviourSubject) {
      this.subscriptions.push(this.potatoesService.disableAutoClickerButtonBehaviourSubject.subscribe({
        next: (res: boolean) => this.disableAutoClickerButton = res,
        error: () => {
          console.log('Error en la suscripción del disabled button');
        }
      }));
    }
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

   particlesLoaded(container: Container): void {
        console.log(container);
    }

    async particlesInit(engine: Engine): Promise<void> {
      await loadFull(engine);
    }

  ngOnDestroy() {
    this.potatoesService.exitSession(this.potatoData);
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
