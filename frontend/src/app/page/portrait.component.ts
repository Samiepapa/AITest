import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HeaderComponent } from '../component/header.component';
import { FooterComponent } from '../component/footer.component';
import { BannerComponent } from '../component/banner.component';
import { SideMenuComponent } from '../component/side-menu.component';

declare const $: any;

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
          onSubmit 함수 내 URL 변경!
          </div>
          <div class="row">
            <form>
              <input type="file" id='input_file' name="input_file" />
              <input type="button" value="submit" (click)='onSubmit()'/>
            </form>
          </div>
          <div class="row">
            <div style="margin-top: 20px; width: 500px; height: 400px;">
              <img id='generated_image' style="width: 100%; height: 100%;" />
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

export class PortraitComponent implements OnInit {

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  constructor() {
    this.init();
  }
  ngOnInit(): void {}

  async init() {}

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  public onSubmit() {
    var api_url = 'https://39.117.105.224:7777/api/v1/file'
    var formData = new FormData();
    formData.append("attached", $(`#input_file`)[0].files[0]);
    $.ajax({
        type: 'POST',
        url: api_url,
        processData: false,
        contentType: false,
        data: formData,
        success: function (data: any) {
            var result = JSON.parse(data)
            $.ajax({
                type: 'GET',
                url: api_url+'/'+result.message,
                processData: false,
                contentType: false,
                data: formData,
                success: function (data: any) {
                    $('#generated_image').attr("src", 'data:image/png;base64, '+data)
                },
                error: function (request: any, status: any, error: any) {
                    alert('unknown exception!\n' + error)
                }
            });
        },
        error: function (request: any, status: any, error: any) {
            alert('unknown exception!\n' + error)
        }
    });
  }
}