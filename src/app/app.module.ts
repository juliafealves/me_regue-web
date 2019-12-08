import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import {AppRoutingModule} from './app.routing.module';
import {PlantService} from './services/plant.service';
import {RestfulService} from './services/restfull.service';
import {HttpClientModule} from '@angular/common/http';
import {PlantFormComponent} from './plant-form/plant-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PlantCardComponent,
    PlantListComponent,
    PlantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [PlantService, RestfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
