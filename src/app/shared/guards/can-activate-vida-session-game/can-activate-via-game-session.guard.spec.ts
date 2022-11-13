import { TestBed } from '@angular/core/testing';

import { CanActivateViaGameSessionGuard } from './can-activate-via-game-session.guard';

describe('CanActivateViaGameSessionGuard', () => {
  let guard: CanActivateViaGameSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateViaGameSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
