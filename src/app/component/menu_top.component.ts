import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'menu-top',
  template: `
    <div class="ui fixed menu">
      <div class="ui container">
        <a routerLink="/" class="header item">Vision Example</a>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class MenuTopComponent {

}