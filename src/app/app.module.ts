import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { CardComponentComponent } from './card-component/card-component.component';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [AppService],
  declarations: [
    AppComponent,
    CardComponentComponent,
    ProductBannerComponent,
    PageTitleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
