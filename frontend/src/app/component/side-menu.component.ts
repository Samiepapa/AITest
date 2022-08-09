import { AfterViewInit, Component } from '@angular/core';

declare const $: any;

@Component({
  selector: 'appSideMenu',
  template: `
    <div class="ui grid">
      <div class="row">
        <div class="column">

          <div class="ui accordion">
            <div class="active title">
              <b><i class="dropdown icon"></i>MENU</b>
            </div>
            <div class="active content">
              <div class="ui link selection list">
                <a class="item" routerLink="/onnx">onnx</a>
                <a class="item" routerLink="/renderer">renderer</a>
                <a class="item" routerLink="/portrait">portrait</a>
                <a class="item" routerLink="/template">template</a>
              </div>
            </div>

        </div>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class SideMenuComponent {

  constructor() {
  }

  public ngAfterViewInit() {
    $('.ui.accordion')
      .accordion()
    ;
  }

}