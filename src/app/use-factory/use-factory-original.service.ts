import { Injectable } from '@angular/core';
import { UseClassUsedService } from './use-factory-used.service';

@Injectable({
  providedIn: 'root',
  useClass: UseClassUsedService
})
export class UseClassOriginalService {

  constructor() { }

  getText() {
    return 'Hello Form UseClassOriginal Service';
  }
}
