import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseFactoryUsedService {

  constructor() { }

  getText() {
    return 'Hello Form UseFactoryUsed Service';
  }
}
