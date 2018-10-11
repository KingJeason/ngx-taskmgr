import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'
import { MatSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import 'hammerjs';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CoreModule,
    LoginModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
