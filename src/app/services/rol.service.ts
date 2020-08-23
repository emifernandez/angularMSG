import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Rol } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private httpClient: HttpClient, private conexion: AuthenticationService) { }

  getAll(): Observable<Rol[]> {
    return this.httpClient.get<Rol[]>(this.conexion.apiURL + '/roles')
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  create(rol): Observable<Rol> {
    return this.httpClient.post<Rol>(this.conexion.apiURL + '/roles/', JSON.stringify(rol), this.conexion.httpOptions)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  update(id, rol): Observable<Rol> {
    return this.httpClient.put<Rol>(this.conexion.apiURL + '/roles/' + id, JSON.stringify(rol), this.conexion.httpOptions)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  delete(id){
    return this.httpClient.delete<Rol>(this.conexion.apiURL + '/roles/' + id, this.conexion.httpOptions)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

  find(id): Observable<Rol> {
    return this.httpClient.get<Rol>(this.conexion.apiURL + '/roles/' + id)
    .pipe(
      catchError(this.conexion.errorHandler)
    );
  }

}
