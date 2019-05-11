import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipersona } from './persona';
import { Observable } from 'rxjs';



@Injectable()
export class PersonasService {
  private apiURL = this.baseUrl + "api/personas";

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPersonas(): Observable<Ipersona[]> {
    return this.http.get<Ipersona[]>(this.apiURL);
  }

}
