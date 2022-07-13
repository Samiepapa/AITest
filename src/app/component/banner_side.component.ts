import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'banner-side',
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
export class BannerSideComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
    $('.ui.accordion')
      .accordion()
    ;
  }

}