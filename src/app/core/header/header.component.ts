import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>()
  @Output() toggleDarkTheme = new EventEmitter<boolean>()
  DarkTheme = false
  constructor() {
  }

  ngOnInit() {
  }
  openSidebar() {
    this.toggle.emit()
  }
  onChange(checked) {
    this.DarkTheme = checked.checked
    this.toggleDarkTheme.emit(checked)
  }
}
