import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorListPageComponent } from './vendor-list-page/vendor-list-page.component';
import { VendorTableComponent } from './vendor-list-page/vendor-table/vendor-table.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorListPageComponent,
    VendorTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
