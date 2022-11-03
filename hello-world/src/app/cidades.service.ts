import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CidadesService {

  constructor(private http: HttpClient) { }

  obterCidadesByRegion(regiao: any): Observable<object> {
    console.log(regiao);
    const url = 'http://localhost:8080/regions/'+regiao;
    return this.http.get(url);
  }
  
}
