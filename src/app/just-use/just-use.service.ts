import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JustUseService {

  constructor() { }

  getText() {
    return 'Hello Form JustUse Service';
  }
}
