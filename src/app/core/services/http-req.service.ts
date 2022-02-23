import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpReqService {
  constructor(private _http: HttpClient) {}

  get(url: string): Observable<any> {
    return this._http.get<any>(url);
  }
}
