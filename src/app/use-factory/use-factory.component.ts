import { UseFactoryOriginalService } from './use-factory-original.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-factory',
  templateUrl: './use-factory.component.html',
  styleUrls: ['./use-factory.component.scss']
})
export class UseFactoryComponent implements OnInit {
  text = 'From component';

  constructor(private useFactoryOriginalService: UseFactoryOriginalService) {}

  ngOnInit() {
    this.text = this.useFactoryOriginalService.getText();
  }
}
