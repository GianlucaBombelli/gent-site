import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GrafPersComponent } from './graf-pers/graf-pers.component';
import { VendNoleComponent } from './vend-nole/vend-nole.component';
import { TonerCartComponent } from './toner-cart/toner-cart.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GrafPageComponent } from './graf-page/graf-page.component';
import { GrafProdComponent } from './sub-components/graf-prod/graf-prod.component';
import { VendPageComponent } from './vend-page/vend-page.component';
import { VendProdComponent } from './sub-components/vend-prod/vend-prod.component';
import { TonerPageComponent } from './toner-page/toner-page.component';
import { TonerProdComponent } from './sub-components/toner-prod/toner-prod.component';
import { SoftwareSistComponent } from './software-sist/software-sist.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    HeaderComponent,
    CarouselComponent,
    GrafPersComponent,
    VendNoleComponent,
    TonerCartComponent,
    HomeComponent,
    FooterComponent,
    GrafPageComponent,
    GrafProdComponent,
    VendPageComponent,
    VendProdComponent,
    TonerPageComponent,
    TonerProdComponent,
    SoftwareSistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
