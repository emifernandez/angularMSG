import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Modalidad } from '../models/modalidad.model';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  constructor(private httpClient: HttpClient, private conexion: AuthenticationService) { }

  getAll(): Observable<Modalidad[]> {
    return this.httpClient.get<Modalidad[]>(this.conexion.apiURL + '/modalidades')
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  create(modalidad): Observable<Modalidad> {
    return this.httpClient.post<Modalidad>(this.conexion.apiURL + '/modalidades/', JSON.stringify(modalidad), this.conexion.httpOptions)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  update(id, modalidad): Observable<Modalidad> {
    return this.httpClient.put<Modalidad>(this.conexion.apiURL + '/modalidades/' + id, JSON.stringify(modalidad), this.conexion.httpOptions)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  delete(id){
    return this.httpClient.delete<Modalidad>(this.conexion.apiURL + '/modalidades/' + id, this.conexion.httpOptions)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  find(id): Observable<Modalidad> {
    return this.httpClient.get<Modalidad>(this.conexion.apiURL + '/modalidades/' + id)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

}
