import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'appBanner',
  template: `
    <div class="ui grid">
      <div class="row">
        BANNER1
      </div>
      <div class="row">
        BANNER2
      </div>
      <div class="row">
        BANNER3
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class BannerComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
    $('.ui.accordion')
      .accordion()
    ;
  }

}