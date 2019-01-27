import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseClassUsedService {

  constructor() { }

  getText() {
    return 'Hello Form UseClassUsed Service';
  }
}
