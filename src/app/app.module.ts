import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuTopComponent } from './component/menu_top.component';
import { MenuSideComponent } from './component/menu_side.component';
import { MenuBottomComponent } from './component/menu_bottom.component';
import { BannerSideComponent } from './component/banner_side.component';

import { MainComponent } from './page/main.component';
import { OnnxComponent } from './page/onnx.component';
import { RendererComponent } from './page/renderer.component';

import { Renderer } from './service/renderer';

@NgModule({
  declarations: [
    AppComponent,

    MenuTopComponent,
    MenuSideComponent,
    MenuBottomComponent,
    BannerSideComponent,

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
