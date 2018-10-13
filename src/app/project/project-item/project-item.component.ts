import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, } from '@angular/core';
import { cardAnim } from '../../anims/card.anim'
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() Invite = new EventEmitter<void>()
  @Output() editProject = new EventEmitter<void>();
  @Output() deleteProject = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out'
  // @Output() toggleDarkTheme = new EventEmitter<boolean>()
  constructor() { }
  @HostListener('mouseenter')
  onmouseenter() {
    this.cardState = 'hover'
  }
  @HostListener('mouseleave')
  onmouseleave() {
    this.cardState = 'out'
  }
  ngOnInit() {
  }
  onInviteClick() {
    this.Invite.emit()
  }
  onEditClick() {
    this.editProject.emit()
  }
  onDelClick() {
    this.deleteProject.emit()
  }
}
