import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './page/main.component';
import { OnnxComponent } from './page/onnx.component';
import { RendererComponent } from './page/renderer.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "onnx", component: OnnxComponent },
  { path: "renderer", component: RendererComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
