import { UseValueOriginalService } from './use-value-original.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-value',
  templateUrl: './use-value.component.html',
  styleUrls: ['./use-value.component.scss']
})
export class UseValueComponent implements OnInit {
  text = 'From component';

  constructor(private useValueOriginalService: UseValueOriginalService) {}

  ngOnInit() {
    this.text = this.useValueOriginalService.getText();
  }
}
