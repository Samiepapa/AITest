import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnnxComponent } from './onnx.component';
import { RendererComponent } from './renderer.component';

const routes: Routes = [
/*
    { path: 'map',  component: MapComponent },
    { path: 'board',  component: BoardComponent },
*/
    { path: "onnx", component: OnnxComponent },
    { path: "renderer", component: RendererComponent },
    { path: '**', redirectTo: 'onnx', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
