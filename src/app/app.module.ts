import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnnxComponent } from './onnx.component';
import { RendererComponent } from './renderer.component';

import { Renderer } from './service/renderer';

@NgModule({
  declarations: [
    AppComponent,
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
