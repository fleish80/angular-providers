import { Injectable } from '@angular/core';
import { useFactoryMethod } from './use-factory-method';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  useFactory: useFactoryMethod,
  deps: [HttpClient]
})
export class UseFactoryOriginalService {

  constructor() { }

  getText() {
    return 'Hello Form UseFactoryOriginal Service';
  }
}
