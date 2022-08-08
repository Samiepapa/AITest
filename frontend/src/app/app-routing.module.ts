import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './page/main.component';
import { OnnxComponent } from './page/onnx.component';
import { RendererComponent } from './page/renderer.component';
import { PortraitComponent } from './page/portrait.component';
import { TemplateComponent } from './page/template.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "onnx", component: OnnxComponent },
  { path: "renderer", component: RendererComponent },
  { path: "portrait", component: PortraitComponent },
  { path: "template", component: TemplateComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
