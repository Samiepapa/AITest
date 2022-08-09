import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { env, Tensor, InferenceSession } from "onnxruntime-web";

import { HeaderComponent } from '../component/header.component';

@Component({
  template: `
    <appHeader></appHeader>
    <div class="ui main text">
      <div style="height:3em;">&nbsp;</div>

      <div class="ui stackable three column padded grid">
        <div class="three wide column olive">
          <appSideMenu></appSideMenu>
        </div>
        <div class="ten wide column black">

          <div class="center_container" (pointerout)="bodyMouseOut($event)" (pointerup)="bodyMouseUp($event)">
          <div class="card elevation">
            <canvas class="canvas elevation" #canvas id="canvas" width="280" height="280" (pointerdown)="canvasMouseDown($event)" (pointermove)="canvasMouseMove($event)"></canvas>

            <div class="button" id="clear-button" (click)="clearCanvas()">CLEAR</div>

            <div class="predictions">
              <div class="prediction-col" id="prediction-0">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">0</div>
              </div>

              <div class="prediction-col" id="prediction-1">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">1</div>
              </div>

              <div class="prediction-col" id="prediction-2">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">2</div>
              </div>

              <div class="prediction-col" id="prediction-3">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">3</div>
              </div>

              <div class="prediction-col" id="prediction-4">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">4</div>
              </div>

              <div class="prediction-col" id="prediction-5">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">5</div>
              </div>

              <div class="prediction-col" id="prediction-6">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">6</div>
              </div>

              <div class="prediction-col" id="prediction-7">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">7</div>
              </div>

              <div class="prediction-col" id="prediction-8">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">8</div>
              </div>

              <div class="prediction-col" id="prediction-9">
                <div class="prediction-bar-container">
                  <div class="prediction-bar"></div>
                </div>
                <div class="prediction-number">9</div>
              </div>
            </div>
          </div>
          </div>

        </div>
        <div class="three wide column olive">
          <appBanner></appBanner>
        </div>
      </div>

    </div>
    <appFooter></appFooter>
  `,
  styles: [`
    .center_container {
      align-items: center;
      background: #fafafa;
      color: #212121;
      display: flex;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      justify-content: center;
      margin: 0;
    }

    .elevation {
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    .card {
      background: #fff;
      border-radius: 4px;
      padding: 16px;
    }

    .canvas {
      border-radius: 4px;
      height: 140px;
      width: 140px;
    }

    .button {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12), inset 0 0 0 rgba(0, 0, 0, 0.3);
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1.25px;
      line-height: 36px;
      margin: 16px 0;
      text-align: center;
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none;
      width: 140px;
    }

    .button:hover {
      background: #f5f5f5;
    }

    .button:active {
      box-shadow: 0 0 rgba(0, 0, 0, 0.2), 0 0 rgba(0, 0, 0, 0.14),
        0 0 rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.05s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .predictions {
      display: flex;
    }

    .prediction-col {
      padding: 0 2px;
    }

    .prediction-bar-container {
      background: #f5f5f5;
      height: 140px;
      width: 10px;
      position: relative;
    }

    .prediction-bar {
      background: #e0e0e0;
      bottom: 0;
      position: absolute;
      width: 100%;
    }

    .prediction-number {
      color: #bdbdbd;
      font-size: 14px;
      text-align: center;
    }

    .top-prediction .prediction-bar {
      background: #00f0ff;
    }

    .top-prediction .prediction-number {
      color: #00f0ff;
      font-weight: bold;
    }
  `]
})
export class OnnxComponent {

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  private CANVAS_SIZE = 280;
  private CANVAS_SCALE = 0.5;

  private ctx: any;
  private isMouseDown = false;
  private hasIntroText = true;
  private lastX = 0;
  private lastY = 0;

  private session: any;

  constructor() {
    
  }

  async Init() {
    console.log(env);
    console.log(env.wasm);
    this.session = await InferenceSession.create("./assets/onnx_model.onnx", {executionProviders: ["webgl"]});
    console.log(this.session.inputNames);
    console.log(this.session.outputNames);
  }

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  public ngAfterViewInit() {
    this.ctx = this.canvas.getContext("2d");

    // Add 'Draw a number here!' to the canvas.
    this.ctx.lineWidth = 28;
    this.ctx.lineJoin = "round";
    this.ctx.font = "28px sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = "#212121";
    this.ctx.fillText("Loading...", this.CANVAS_SIZE / 2, this.CANVAS_SIZE / 2);

    // Set the line color for the canvas.
    this.ctx.strokeStyle = "#212121";

    this.ctx.clearRect(0, 0, this.CANVAS_SIZE, this.CANVAS_SIZE);
    this.ctx.fillText("Draw a number here!", this.CANVAS_SIZE / 2, this.CANVAS_SIZE / 2);

    this.Init();
  }

  public onResize(event: any) {

  }

  public clearCanvas() {
    this.ctx.clearRect(0, 0, this.CANVAS_SIZE, this.CANVAS_SIZE);
    for (let i = 0; i < 10; i++) {
      let element = document.getElementById(`prediction-${i}`);
      element!.className = "prediction-col";
      let obj = element!.children[0].children[0] as HTMLElement;
      obj.style.height = "0";
    }
  }

  public drawLine(fromX: any, fromY: any, toX: any, toY: any) {
    // Draws a line from (fromX, fromY) to (toX, toY).
    this.ctx.beginPath();
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.closePath();
    this.ctx.stroke();
    this.updatePredictions();
  }

  async updatePredictions() {
    // Get the predictions for the canvas data.
    const imgData = this.ctx.getImageData(0, 0, this.CANVAS_SIZE, this.CANVAS_SIZE);
    const input = new Tensor("float32", new Float32Array(imgData.data));

    const feeds = { '0': input };

    const outputName = this.session.outputNames[0];
    const outputMap = await this.session.run(feeds);
    const outputTensor = outputMap[outputName];
    const predictions = outputTensor.data;
    const maxPrediction = Math.max(...predictions);

    for (let i = 0; i < predictions.length; i++) {
      let element = document.getElementById(`prediction-${i}`);
      if (element != null) {
        let obj = element!.children[0].children[0] as HTMLElement;
        obj.style.height = `${predictions[i] * 100}%`;
        element.className =
          predictions[i] === maxPrediction
            ? "prediction-col top-prediction"
            : "prediction-col";
       }
    }
  }

  public canvasMouseDown(event: any) {
    this.isMouseDown = true;
    if (this.hasIntroText) {
      this.clearCanvas();
      this.hasIntroText = false;
    }
    const x = event.offsetX / this.CANVAS_SCALE;
    const y = event.offsetY / this.CANVAS_SCALE;

    // To draw a dot on the mouse down event, we set laxtX and lastY to be
    // slightly offset from x and y, and then we call `canvasMouseMove(event)`,
    // which draws a line from (laxtX, lastY) to (x, y) that shows up as a
    // dot because the difference between those points is so small. However,
    // if the points were the same, nothing would be drawn, which is why the
    // 0.001 offset is added.
    this.lastX = x + 0.001;
    this.lastY = y + 0.001;
    this.canvasMouseMove(event);
  }

  public canvasMouseMove(event: any) {
    const x = event.offsetX / this.CANVAS_SCALE;
    const y = event.offsetY / this.CANVAS_SCALE;
    if (this.isMouseDown) {
      this.drawLine(this.lastX, this.lastY, x, y);
    }
    this.lastX = x;
    this.lastY = y;
  }

  public bodyMouseUp(event: any) {
    this.isMouseDown = false;
  }

  public bodyMouseOut(event: any) {
    // We won't be able to detect a MouseUp event if the mouse has moved
    // ouside the window, so when the mouse leaves the window, we set
    // `isMouseDown` to false automatically. This prevents lines from
    // continuing to be drawn when the mouse returns to the canvas after
    // having been released outside the window.
    if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
      this.isMouseDown = false;
    }
  }

}