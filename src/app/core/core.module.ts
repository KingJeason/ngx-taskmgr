import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { loadSvgResources } from '../utils/svg.util';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  // 这里如果不导出的话, 则只能在core模块里使用
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在, 不能再次加载')
    }
    loadSvgResources(iconRegistry, sanitizer)
  }
}
