import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import {AppRoutingModule} from './app.routing.module';
import {PlantService} from './services/plant.service';
import {RestfulService} from './services/restfull.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlantCardComponent,
    PlantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlantService, RestfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
