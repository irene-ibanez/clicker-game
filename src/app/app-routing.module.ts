import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { CanActivateViaGameSessionGuard } from './shared/guards/can-activate-vida-session-game/can-activate-via-game-session.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent, canActivate: [CanActivateViaGameSessionGuard]},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
