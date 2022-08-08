import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FileHandle  } from '../directive/image-drag.directive';

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

        <div class="ui centered grid">
          <div class="row">
            <div style="width: 500px; height: 250px; text-align: center;" appImageDrag (files)="filesDropped($event)">
              <span style="font-size: 25px;">Drop your files here</span>
            </div>
          </div>
          <div class="row" *ngFor="let file of uploadedFiles">
            <div style="margin-top: 20px; width: 500px; height: 400px;">
              <img [src]="file.url" style="width: 100%; height: 100%;" />
            </div>
          </div>
        </div>

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
export class TemplateComponent implements OnInit {
  uploadedFiles: FileHandle[] = [];

  constructor() {}

  ngOnInit(): void {}

  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }
}