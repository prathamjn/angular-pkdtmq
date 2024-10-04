import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
  @Input() lounge;
  @Output() exploreClickedEvent = new EventEmitter<String>();
  constructor() {}

  ngOnInit() {}

  loungeDetails(name: String) {
    this.exploreClickedEvent.emit(name);
  }
}
