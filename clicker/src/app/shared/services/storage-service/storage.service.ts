import { Injectable } from '@angular/core';
import { PotatoSession } from '../../models/potato-session-model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  loadSession(name:string): PotatoSession {
    let potatoData: PotatoSession;
    let potatoDataString = localStorage.getItem(name);
    if (potatoDataString) {
      potatoData = JSON.parse(potatoDataString);
    } else {
      potatoData = {
        name: name,
        score: 0,
        numAutoClickers: 0
      }
    } return potatoData;
  }

  saveState(data: PotatoSession): void {
    localStorage.setItem(data.name, JSON.stringify(data));
  }

}
