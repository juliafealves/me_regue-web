import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import PlantModel from '../models/plant.model';
import {PlantService} from './plant.service';

@Injectable({
  providedIn: 'root'
})
export class PlantResolve implements Resolve<Observable<PlantModel>> {

  constructor(private plantService: PlantService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PlantModel> {
    const id = route.params.idPlant;
    return this.plantService.findById(id);
  }
}
