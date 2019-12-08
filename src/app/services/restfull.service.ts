import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RestfulService {
  public controller: string;
  public apiUrl = environment.apiUrl;

  constructor(public httpClient: HttpClient) {}

  public save(model: any): Observable<any> {
    return this.post(this.controller, model);
  }

  public update(model: any): Observable<any> {
    return this.put(`${this.controller}/${model.id}`, model);
  }

  public findAll(): Observable<any> {
    return this.get(this.controller);
  }

  public findById(id: number): Observable<any> {
    return this.get(`${this.controller}/${id}`);
  }

  public destroy(id: number): Observable<any> {
    return this.delete(`${this.controller}/${id}`);
  }

  protected delete(
    url: string,
    headers: HttpHeaders = this.makeHeaders()
  ): Observable<any> {
    return this.httpClient.delete(url, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  protected post(
    url: string,
    data: any,
    headers: HttpHeaders = this.makeHeaders()
  ): Observable<any> {
    return this.httpClient.post(url, data, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  protected put(
    url: string,
    data: any,
    headers: HttpHeaders = this.makeHeaders()
  ): Observable<any> {
    return this.httpClient.put(url, data, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  protected get(
    url: string,
    headers: HttpHeaders = this.makeHeaders()
  ): Observable<any> {
    return this.httpClient.get(url, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  protected makeHeaders(): HttpHeaders {
      return new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      });
  }

  protected handleError(error: HttpErrorResponse): Observable<any> {
      return throwError(error);
  }
}
