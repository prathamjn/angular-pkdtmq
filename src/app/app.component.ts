import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appService: AppService) {}
  lounges;
  product;
  pageTitle;
  ngOnInit(): void {
    this.appService.getConfig().subscribe((res) => {
      this.lounges = res['lounges'];
      this.product = res['productBanner'];
      this.pageTitle = res['pageTitle'];
    });
  }

  showLoungeDetails(lounge: String) {
    console.log(`${lounge} clicked`);
  }

  findLounge() {
    console.log('Find your lounge');
  }
}
