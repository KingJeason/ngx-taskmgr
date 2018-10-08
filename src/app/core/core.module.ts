import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  // 这里如果不导出的话, 则只能在core模块里使用
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在, 不能再次加载')
    }
  }
}
