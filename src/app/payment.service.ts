import { Injectable } from '@angular/core';
import  { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDetails } from './details';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private _card = "../assets/card.json";

  constructor(private _http:Http, details:IDetails) { }
   getDetails(): Observable<IDetails[]> { 
    return this._http.get(this._card).map(response => <IDetails[]>response.json());
  }
}
