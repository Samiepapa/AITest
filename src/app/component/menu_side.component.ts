import { AfterViewInit, Component } from '@angular/core';

declare const $: any;

@Component({
  selector: 'menu-side',
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
              </div>
            </div>

        </div>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class MenuSideComponent {

  constructor() {
  }

  public ngAfterViewInit() {
    $('.ui.accordion')
      .accordion()
    ;
  }

}