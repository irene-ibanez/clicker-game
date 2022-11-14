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
    }
    this.saveSession(potatoData);
    return potatoData;
  }

  saveSession(data: PotatoSession): void {
    localStorage.setItem(data.name, JSON.stringify(data));
  }

  public allItemsFromStorage() {
    let values: any[] = [];
    let keys = Object.keys(localStorage);
    keys.forEach(key => {
      const indexString = localStorage.getItem(key);
      if(indexString) {
        values.push(JSON.parse(indexString));
      }
    });
    values.sort((a,b) => b.score - a.score);
    return values;
  }

}
