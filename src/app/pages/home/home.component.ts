import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RankingDialogComponent } from 'src/app/shared/components/ranking-dialog/ranking-dialog.component';
import { PotatoesService } from 'src/app/shared/services/potatoes-service/potatoes-service.service';
import { StorageService } from 'src/app/shared/services/storage-service/storage.service';
import { loadFull } from 'tsparticles';
import { ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public form: FormGroup;
  public rankingPotatoData: any;
   id = "tsparticles";
 particlesOptions = {
        background: {
            color: {
                value: "#efbbff",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ClickMode.push,
                },
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

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

   particlesLoaded(container: Container): void {
        console.log(container);
    }

    async particlesInit(engine: Engine): Promise<void> {
      await loadFull(engine);
    }
}
