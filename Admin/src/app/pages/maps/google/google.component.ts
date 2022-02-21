import { Component, OnInit, ViewChild, Input, Inject, PLATFORM_ID } from '@angular/core';

import { MapsAPILoader } from '@agm/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

/**
 * Google component
 */
export class GoogleComponent implements OnInit {
  longitude = 20.728218;
  latitude = 52.128973;
  markers: any;

  @ViewChild('streetviewMap', { static: true }) streetviewMap: any;
  @ViewChild('streetviewPano', { static: true }) streetviewPano: any;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  constructor(@Inject(PLATFORM_ID) private platformId: any, private mapsAPILoader: MapsAPILoader) { }


  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Maps' }, { label: 'Google Maps', active: true }];

    this._initPanorama();

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * street view map
   */
  _initPanorama() {
    if (isPlatformBrowser(this.platformId)) {
      this.mapsAPILoader.load().then(() => {
        const center = { lat: 42.345573, lng: -71.098326 };
        // tslint:disable-next-line: no-string-literal
        const map = new window['google'].maps.Map(this.streetviewMap.nativeElement, { center, zoom: 12, scrollwheel: false });
        // tslint:disable-next-line: no-string-literal
        const panorama = new window['google'].maps.StreetViewPanorama(
          this.streetviewPano.nativeElement, {
          position: center,
          pov: { heading: 34, pitch: 10 },
          scrollwheel: false
        });
        map.setStreetView(panorama);
      });
    }
  }

  /**
   *
   * @param position position where marker added
   */
  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;

    this.markers.push({ latitude: lat, longitude: lng });
  }

  /**
   * Fetches the value of map
   */
  private _fetchData() {
    this.markers = [
      { latitude: 52.228973, longitude: 20.728218 }
    ];
  }

}
