import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6'

  constructor(private http: HttpClient) { }

  public getData() : Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
}
