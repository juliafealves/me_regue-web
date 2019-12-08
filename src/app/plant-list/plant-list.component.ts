import { Component, OnInit } from '@angular/core';
import PlantModel from '../models/plant.model';
import {PlantService} from '../services/plant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  public plants: Array<PlantModel> = [];

  constructor(private plantService: PlantService,
              private router: Router) {}
  ngOnInit() {
    this.list();
  }

  private list(): void {
    this.plantService.findAll().subscribe(response => {
      const plants = response.data;
      this.plants = plants.map(plant => new PlantModel(plant));
    }, error => console.error(error.error));
  }

  public async update($event: any): Promise<boolean> {
    return await this.router.navigateByUrl(`plants/edit/${$event.id}`);
  }

  public destroy($event: any): void {
    const isDestroy = window.confirm('Deseja excluir este registro?');

    if (isDestroy) {
      this.plants.shift();
      this.plantService.destroy($event.id).subscribe(response => {
        alert(response.message);
      }, error => {
        alert('Plant was not removed.');
        this.plants = [$event, ...this.plants];
      });
    }
  }
}
