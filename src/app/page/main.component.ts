import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { MenuTopComponent } from '../component/menu_top.component';
import { MenuSideComponent } from '../component/menu_side.component';
import { BannerSideComponent } from '../component/banner_side.component';

@Component({
  template: `
    <menu-top></menu-top>
    <div class="ui main text">
      <div style="height:3em;">&nbsp;</div>

      <div class="ui stackable three column padded grid">
        <div class="three wide column olive">
          <menu-side></menu-side>
        </div>
        <div class="ten wide column black">
          <img src="assets/images/dance.gif" class="ui centered image">
        </div>
        <div class="three wide column olive">
          <banner-side></banner-side>
        </div>
      </div>

    </div>
    <menu-bottom></menu-bottom>
  `,
  styles: [`

  `]
})
export class MainComponent {

}