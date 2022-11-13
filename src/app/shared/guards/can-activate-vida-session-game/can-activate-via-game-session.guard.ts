import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PotatoesService } from '../../services/potatoes-service/potatoes-service.service';
import { StorageService } from '../../services/storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaGameSessionGuard implements CanActivate {

  constructor(
    private readonly potatoesService: PotatoesService,
    private readonly router: Router
    ) { }

  canActivate() {
      // If the user is not logged in we'll send them back to the home page
      if (!this.potatoesService.isSessionLoaded()) {
          this.router.navigate(['/home']);
          return false;
      }
      return true;
  }

}


