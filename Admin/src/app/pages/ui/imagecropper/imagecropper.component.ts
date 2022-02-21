import { Component, OnInit, ViewChild } from '@angular/core';

import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-imagecropper',
  templateUrl: './imagecropper.component.html',
  styleUrls: ['./imagecropper.component.scss']
})

/**
 * UI-Image-cropper component
 */
export class ImagecropperComponent implements OnInit {

  constructor() { }

  // bread crumb items
  breadCrumbItems: Array<{}>;

  transform: ImageTransform = {};

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;

  @ViewChild(ImageCropperComponent, { static: true }) imageCropper: ImageCropperComponent;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'UI' }, { label: 'Image Crop', active: true }];
  }

  /**
   * Crop image
   * @param event image passed
   */
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  /**
   * Rotate image left
   */
  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  /**
   * Rotate image right
   */
  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }
  /**
   * Flip image horizontal
   */
  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  /**
   * Flip image vertical
   */
  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }
}
