import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUserName(name: string): void {
    localStorage.setItem('name', name);
  }

  getUserName(): string | null{
    return localStorage.getItem('name');
  }

}
