import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() Invite = new EventEmitter<void>()
  // @Output() toggleDarkTheme = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }
  onInviteClick() {
    this.Invite.emit()
  }

}
