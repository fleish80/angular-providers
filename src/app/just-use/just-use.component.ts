import { Component, OnInit } from '@angular/core';
import { JustUseService } from './just-use.service';

@Component({
  selector: 'app-just-use',
  templateUrl: './just-use.component.html',
  styleUrls: ['./just-use.component.scss']
})
export class JustUseComponent implements OnInit {

  constructor(private justUseService: JustUseService) { }

  text = 'From component';

  ngOnInit() {
    this.text = this.justUseService.getText();
  }

}
