import { UseFactoryUsedService } from './use-factory-used.service';
import { HttpClient } from 'selenium-webdriver/http';

export function useFactoryMethod(http: HttpClient) {
  console.log(!!http);
  return new UseFactoryUsedService();
}
