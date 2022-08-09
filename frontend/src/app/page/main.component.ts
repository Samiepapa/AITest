import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { HeaderComponent } from '../component/header.component';
import { FooterComponent } from '../component/footer.component';
import { BannerComponent } from '../component/banner.component';
import { SideMenuComponent } from '../component/side-menu.component';

@Component({
  template: `
    <appHeader></appHeader>
    <div class="ui main text">
      <div style="height:3em;">&nbsp;</div>

      <div class="ui stackable three column padded grid">
        <div class="three wide column olive">
          <appSideMenu></appSideMenu>
        </div>
        <div class="ten wide column black">
          <img src="assets/images/dance.gif" class="ui centered image">
        </div>
        <div class="three wide column olive">
          <appBanner></appBanner>
        </div>
      </div>

    </div>
    <appFooter></appFooter>
  `,
  styles: [`

  `]
})
export class MainComponent {

}