import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component'
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { defaultRouteAnim } from '../../anims/router.anim'
// import { Observable } from 'rxjs/Observable';
import { listAnimation } from '../../anims/list.anim'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    defaultRouteAnim,
    listAnimation
  ]
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      'id': 1,
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'id': 2,
      'name': '企业协作平台2',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/1.jpg'
    }
  ]
  constructor(private dialog: MatDialog) { }
  @HostBinding('@routeAnim') state;
  // listAnim$: Observable<number>;
  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        title: '添加项目'
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.projects = [...this.projects, {
        'id': 3,
        'name': '新项目',
        'desc': '这是一个企业内部项目',
        'coverImg': 'assets/img/covers/8.jpg'
      }]
    })
  }
  launchInviteDialog() {
    this.dialog.open(InviteComponent)
  }
  openEditProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        title: '修改项目'
      }
    })
  }
  launchConfirmDialog(project) {
    console.log('进入了')
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除项目',
        content: '您确认删除该项目么?'
      }
    })
    dialogRef.afterClosed().subscribe(result =>{
      this.projects = this.projects.filter(p => p.id !== project.id)
    })
  }
}
