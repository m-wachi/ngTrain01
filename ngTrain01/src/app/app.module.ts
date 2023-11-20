import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Input01Component } from './input01/input01.component';
import { Input02Component } from './input02/input02.component';
import { Input03Component } from './input03/input03.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Input01Component,
    Input02Component,
    Input03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/ngTrain01'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
