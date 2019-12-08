import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import PlantModel from '../models/plant.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PlantService} from '../services/plant.service';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent implements OnInit {
  public title = 'Cadastrar Planta';
  private editing = false;
  public plantForm: FormGroup;
  private plant: PlantModel;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private plantService: PlantService) {
    this.plantForm = this._builderForm();
  }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data.plant;
    console.log(data);
    if (data) {
      this.editing = true;
      this.title = 'Editar Planta';
      this.plant = new PlantModel(data.data);
      this._fillForm(this.plant);
    }
  }

  public save() {
    const plant: PlantModel = new PlantModel(this.plantForm.getRawValue());

    if (this.plant && this.plant.id > 0) {
      plant.id = this.plant.id;
    }

    if (plant.id > 0) {
      this._edit(plant);
    } else {
      this._add(plant);
    }
  }

  private async _add(plant: PlantModel) {
    this.plantService
      .save(plant.modelToRestObject())
      .subscribe(response => {
          this.router.navigate([ '' ]);
        },
        error => alert('Plant not added.')
    );
  }

  private _builderForm() {
    return this.formBuilder.group({
      name: ['', Validators.required ],
      description: [''],
    });
  }

  private async _edit(plant: PlantModel) {
    this.plantService
      .update(plant.modelToRestObject())
      .subscribe(response => {
          this.router.navigate([ '' ]);
        },
        error => alert('Plant not updated.')
    );
  }

  private _fillForm(plant: PlantModel): void {
    this
      .plantForm
      .patchValue({
        name: plant.name,
        description: plant.description
      });
  }

}
