import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {RestfulService} from './restfull.service';

@Injectable()
export class PlantService extends RestfulService {
  constructor(
    public httpClient: HttpClient,
  ) {
    super(httpClient);
    this.controller = `${this.apiUrl}/plants`;
  }
}
