import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlantCardComponent,
    PlantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
