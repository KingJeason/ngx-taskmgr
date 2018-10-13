import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'
import { MatSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    CoreModule,
    LoginModule,
    TaskModule,
    ProjectModule,
    BrowserAnimationsModule, // 一般放到最后,放到前面可能导致异常
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
