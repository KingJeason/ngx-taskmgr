import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  squareState: string
  title = 'taskmgr';
  darkTheme = false
  constructor(
    private oc: OverlayContainer
  ) { }

  switchTheme(dark) {
    console.log(dark)
    this.darkTheme = dark
    this.oc.getContainerElement().classList.add(dark ? 'myapp-dark-theme' : '')
  }
}
