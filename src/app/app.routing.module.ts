import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PlantListComponent } from './plant-list/plant-list.component';
import {PlantFormComponent} from './plant-form/plant-form.component';
import {PlantResolve} from './services/plant.resolve';

const routes: Routes = [
  { path: '', component: PlantListComponent },
  { path: 'plants/add', component: PlantFormComponent },
  { path: 'plants/edit/:idPlant', component: PlantFormComponent, resolve: { plant: PlantResolve } },
  { path: '**', component: PlantListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
