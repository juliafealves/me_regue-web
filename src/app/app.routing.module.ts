import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PlantListComponent } from './plant-list/plant-list.component';

const routes: Routes = [
  { path: '', component: PlantListComponent },
  { path: '**', component: PlantListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
