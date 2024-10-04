import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.css'],
})
export class ProductBannerComponent implements OnInit {
  @Input() product;
  @Output() findClickedEvent = new EventEmitter<String>();
  constructor() {}

  ngOnInit() {}

  findYourLounge() {
    this.findClickedEvent.emit();
  }
}
