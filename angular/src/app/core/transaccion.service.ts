import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Transacciones } from '../shared/transacciones';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  baseUrl: string=  "http://localhost:64439";
  constructor(private httpClient: HttpClient) { }
  getPosts() : Observable<Transacciones[]>{
    return this.httpClient.get<Transacciones[]>('$baseUrl/');
  }
}