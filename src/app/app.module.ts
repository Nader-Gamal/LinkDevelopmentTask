import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { ThingWeDoComponent } from './components/thing-we-do/thing-we-do.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroComponent, ThingWeDoComponent, LatestNewsComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
