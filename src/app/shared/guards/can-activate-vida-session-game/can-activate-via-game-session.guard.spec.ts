import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PotatoesService } from '../../services/potatoes-service/potatoes-service.service';
import { CanActivateViaGameSessionGuard } from './can-activate-via-game-session.guard';

describe('CanActivateViaGameSessionGuard', () => {
  let guard: CanActivateViaGameSessionGuard;
  let potatoesService = {
    isSessionLoaded: jasmine.createSpy('isSessionLoaded')
  }
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          {provide: Router, useValue: router},
          {provide: PotatoesService, useValue: potatoesService}
      ]});
    guard = TestBed.inject(CanActivateViaGameSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false when is not session loaded', () => {
    potatoesService.isSessionLoaded.and.returnValue(false)
    const responseGuard = guard.canActivate();
    expect(responseGuard).toBeFalse();
  })

  it('should return true when is session loaded', () => {
    potatoesService.isSessionLoaded.and.returnValue(true)
    const responseGuard = guard.canActivate();
    expect(responseGuard).toBeTrue();
  })

  it('should navigate home when is not session loaded', () => {
    potatoesService.isSessionLoaded.and.returnValue(false)
    guard.canActivate();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })
});
