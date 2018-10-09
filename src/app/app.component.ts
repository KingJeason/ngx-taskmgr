import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskmgr';
  darkTheme = false
  switchTheme(dark) {
    console.log(dark)
    this.darkTheme = dark
  }
}
