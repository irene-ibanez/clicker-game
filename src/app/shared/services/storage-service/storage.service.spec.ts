import { TestBed } from '@angular/core/testing';
import { PotatoSession } from '../../models/potato-session-model';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load session with valid name from local storage', () => {
    spyOn(service, 'saveSession')
    const validPotatoData: PotatoSession  = {
      name: 'Name',
      score: 100,
      numAutoClickers: 200
    }
    localStorage.setItem(validPotatoData.name, JSON.stringify(validPotatoData));
    service.loadSession(validPotatoData.name);
    expect(service.saveSession).toHaveBeenCalledOnceWith(validPotatoData)
  })

  it('should load session with invalid name from local storage', () => {
    spyOn(service, 'saveSession')
    const invalidPotatoSession = {
      name: 'Name',
      score: 0,
      numAutoClickers: 0
    }
    localStorage.setItem(invalidPotatoSession.name, JSON.stringify(invalidPotatoSession));
    service.loadSession(invalidPotatoSession.name);
    expect(service.saveSession).toHaveBeenCalledOnceWith(invalidPotatoSession)
  })

  it('should call saveSession with potatoData', () => {
    const validPotatoData: PotatoSession  = {
      name: 'Name',
      score: 100,
      numAutoClickers: 200
    }
    service.saveSession(validPotatoData);
    localStorage.setItem(validPotatoData.name, JSON.stringify(validPotatoData));
  })
});
