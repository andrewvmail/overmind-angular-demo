// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createOvermind } from 'overmind';
import { OvermindModule, OvermindService, OVERMIND_INSTANCE } from 'overmind-angular'

import { config, Store } from '../overmind'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OvermindModule
  ],
  providers: [

    { provide: OVERMIND_INSTANCE, useFactory: () => createOvermind(config) },
    { provide: Store, useExisting: OvermindService }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
