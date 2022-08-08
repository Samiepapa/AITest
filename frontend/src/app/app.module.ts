import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImageDragDirective } from './directive/image-drag.directive';

import { HeaderComponent } from './component/header.component';
import { FooterComponent } from './component/footer.component';
import { BannerComponent } from './component/banner.component';
import { SideMenuComponent } from './component/side-menu.component';

import { MainComponent } from './page/main.component';
import { OnnxComponent } from './page/onnx.component';
import { RendererComponent } from './page/renderer.component';
import { PortraitComponent } from './page/portrait.component';
import { TemplateComponent } from './page/template.component';

import { Renderer } from './service/renderer';

@NgModule({
  declarations: [
    AppComponent,

    ImageDragDirective,

    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SideMenuComponent,

    MainComponent,
    OnnxComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, Renderer],
  bootstrap: [AppComponent]
})
export class AppModule { }
