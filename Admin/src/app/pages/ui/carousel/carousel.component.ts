import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

/**
 * UI-carousel component
 */
export class CarouselComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  showNavigationArrows: any;
  showNavigationIndicators: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Carousel', active: true }];
  }
}
