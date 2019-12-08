import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent implements OnInit {
  @Input()
  plant: string;

  @Input()
  description: string;

  constructor() { }

  ngOnInit() {
  }
}
