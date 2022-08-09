import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'appHeader',
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
export class HeaderComponent {

}