import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Carousel } from './componenets/carousel/carousel';
import { Card } from './componenets/card/card';
import { CarouselForm } from './forms/carousel-form/carousel-form';
import { CardForm } from './forms/card-form/card-form';
import { Tabs } from './componenets/tabs/tabs';
import { TabsForm } from './forms/tabs-form/tabs-form';

@NgModule({
  declarations: [
    App,
    Carousel,
    Card,
    Tabs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselForm,
    CardForm,
    TabsForm
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
