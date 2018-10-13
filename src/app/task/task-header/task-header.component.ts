import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = ''
  @Output() newTask = new EventEmitter<void>()
  @Output() moveAll = new EventEmitter<void>()
  @Output() deleteTaskList = new EventEmitter<void>()
  @Output() editTaskList = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }
  onNewTaskClick() {
    this.newTask.emit()
  }
  onMoveAllClick() {
    this.moveAll.emit()
  }
  onDeleteClick() {
    console.log('rr124123')
    this.deleteTaskList.emit()
  }
  onEditListClick() {
    this.editTaskList.emit()
  }

}
