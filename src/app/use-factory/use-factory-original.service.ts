import { Injectable } from '@angular/core';
import { UseFactoryUsedService } from './use-factory-used.service';

@Injectable({
  providedIn: 'root',
  useClass: UseFactoryUsedService
})
export class UseFactoryOriginalService {

  constructor() { }

  getText() {
    return 'Hello Form UseFactoryOriginal Service';
  }
}
