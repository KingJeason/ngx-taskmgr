import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material'
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { defaultRouteAnim } from '../../anims/router.anim'
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    defaultRouteAnim
  ]
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去发多少地方啊',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务一: 去发多少地方啊',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去发多少地方啊111223423424',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务一: 去发多少地方啊',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 3,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去发多少地方啊',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务一: 去发多少地方啊',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    }
  ]
  constructor(private dialog: MatDialog) { }
  @HostBinding('@routeAnim') state;
  ngOnInit() {
  }
  lanuchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: {
        title: '新建任务'
      }
    })
  }
  lanchMoveAllDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {
      data: {
        lists: this.lists
      }
    })
  }
  lanuchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除任务列表',
        content: '您确认删除该任务列表么?'
      }
    })
  }
  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: {
        title: '修改任务',
        task
      }
    })
  }
  lanuchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '修改列表标题名称',
      }
    })
  }
  lanuchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '新建列表标题名称',
      }
    })
  }

}
