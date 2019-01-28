import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: {
    getText: () => {
      return 'Hello Form UseValueUsed Service';
    }
  }
})
export class UseValueOriginalService {
  constructor() {}

  getText() {
    return 'Hello Form UseValueOriginal Service';
  }
}
