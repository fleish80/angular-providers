import { UseClassOriginalService } from './use-factory-original.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-class',
  templateUrl: './use-class.component.html',
  styleUrls: ['./use-class.component.scss']
})
export class UseClassComponent implements OnInit {
  text = 'From component';

  constructor(private useClassOriginalService: UseClassOriginalService) {}

  ngOnInit() {
    this.text = this.useClassOriginalService.getText();
  }
}
