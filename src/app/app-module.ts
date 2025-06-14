import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Carousel } from './componenets/carousel/carousel';
import { Card } from './componenets/card/card';
import { CarouselForm } from './forms/carousel-form/carousel-form';

@NgModule({
  declarations: [
    App,
    Carousel,
    Card,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselForm
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
