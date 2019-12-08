import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PlantModel from '../models/plant.model';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent implements OnInit {
  @Input()
  plant: PlantModel;

  @Output()
  update = new EventEmitter();

  @Output()
  destroy = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  public onUpdate(): void {
    this.update.emit(this.plant);
  }

  public onDestroy(): void {
    this.destroy.emit(this.plant);
  }
}
