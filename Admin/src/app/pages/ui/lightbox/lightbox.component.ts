import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  albums = [];
  gallery = [];
  images = [];
  id = 'JlvxDa7Sges';

  longitude = 20.728218;
  latitude = 52.128973;
  markers: any;
  zoom: number = 15;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Lightbox', active: true }];

  }
  constructor(private lightbox: Lightbox, private modalService: NgbModal, private mapsAPILoader: MapsAPILoader) {

    for (let i = 1; i <= 1; i++) {
      const src = '../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/small/img-' + i + '.jpg';
      const album = {
        src,
        caption,
        thumb
      };
      this.images.push(album);
    }

    for (let i = 1; i <= 2; i++) {
      const src = '../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/small/img-' + i + '.jpg';
      const album = {
        src,
        caption,
        thumb
      };
      this.gallery.push(album);
    }

    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/small/img-' + i + '.jpg';
      const album = {
        src,
        caption,
        thumb
      };
      this.albums.push(album);
    }
  }

  /**
   * Open lightbox
   */
  openImage(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index, {
      showZoom: true
    });
  }

  /**
   * Open lightbox
   */
  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
  }

  /**
   * Open ZoomGallery lightbox
   */
  openZoomGallery(index: number): void {
    // open lightbox
    this.lightbox.open(this.gallery, index, {
      wrapAround: true, showImageNumberLabel: true
    });
  }

  /**
   * Close lightbox
   */
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  /**
   * Open modal
   * @param content modal content
   */
  openYoutubeModal(content: any) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

  /**
   * Google Map Open modal
   * @param googlemap modal content
   */
  openMapModal(content: any) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

}
