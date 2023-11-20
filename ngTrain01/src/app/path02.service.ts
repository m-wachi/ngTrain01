import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data01 } from './data01';

@Injectable({
  providedIn: 'root'
})
export class Path02Service {

  private path02Url = 'api/path02';

  constructor(private http: HttpClient) { }

  getData01(): Observable<Data01> {
    //const data01 = of ({prop01: "pro01Value2", prop02: 5});

    const data01 = this.http.get<Data01>(this.path02Url);
    return data01;
  }

  put01(data01: Data01): Observable<Data01> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    let ret = this.http.put<Data01>(this.path02Url, data01, httpOptions);
    
    return ret;
  }  


}
