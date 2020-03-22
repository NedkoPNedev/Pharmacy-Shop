import { Component } from '@angular/core';
import {SampleService} from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sampleService: SampleService) {
  }

  showInfo() {
      this.sampleService.fetchInfo().subscribe(res => console.log(res.body));
  }
}
