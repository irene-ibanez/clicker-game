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
    // if(!this.getPotatoStorage().find(s => s == data.name)){
    //   const arraySesions = this.getPotatoStorage();
    //   arraySesions .push(data.name);

    // }
  }

  // getAllSessions():PotatoSession[]{
  //   const sessions:PotatoSession[] = [];
  //   this.getPotatoStorage().forEach(name=>{
  //     sessions.push(this.loadSession(name));
  //     localStorage.setItem('potatoStorageIndex', JSON.stringify(sessions));

  //   })
  //   return sessions;
  // }

  // private getPotatoStorage(): string[] {
  //   const potatoStorage = localStorage.getItem('potatoStorageIndex');
  //   let potatoStorageObject;
  //   if (!potatoStorage) {
  //     potatoStorageObject = {sessions: []};
  //     localStorage.setItem('potatoStorageIndex', JSON.stringify(potatoStorageObject));
  //   } else {
  //     potatoStorageObject = JSON.parse(potatoStorage);
  //   }
  //   return potatoStorageObject.sessions;
  // }

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
