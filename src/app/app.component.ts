import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loading: boolean;
  constructor() {
    console.log('loading', this.loading);
  }
  title = 'app works!';
}
