import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { OPModule } from './op/op.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    OPModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
