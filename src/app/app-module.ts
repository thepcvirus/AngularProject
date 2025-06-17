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
import { MainBody } from './main-body/main-body';
import { MainDescription } from './componenets/main-description/main-description';
import { MainDescriptionForm } from './forms/main-description-form/main-description-form';
import { MainSettings } from './main-settings/main-settings';
import { AiFormComponent } from './ai-form/ai-form';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from '../environments/environment';
import { LoginComponent } from './componenets/app-login/app-login';
import { SignupComponent } from './componenets/app-signup/app-signup';
import { ForgotPasswordComponent } from './componenets/forgot-password/forgot-password';
import { LogoutComponent } from './componenets/logout.component/logout.component';
import { AuthGuard } from './componenets/auth.guard/auth.guard';
import { Dashboard } from './componenets/dashboard/dashboard';
import { NavbarComponent } from './componenets/nav-bar/nav-bar';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Bio } from './componenets/bio/bio';
import { BioForm } from './forms/bio-form/bio-form';
@NgModule({
  declarations: [
    App,
    Carousel,
    Card,
    Tabs,
    MainDescription,
    MainBody,
    Bio,
    BioForm,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    CarouselForm,
    CardForm,
    TabsForm,
    MainDescriptionForm,
    MainSettings,
    AiFormComponent,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    NavbarComponent,
    RouterLink,
    RouterModule,
    FormsModule
  ],
  exports:[RouterModule,    
],
  providers: [
    AuthGuard,
    Dashboard,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
