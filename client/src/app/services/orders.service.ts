import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private _ordersUrl = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  public getOrders(page: Number, page_size: Number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('page', page.toString()).set('page_size', page_size.toString())
    }
    return this._http.get(this._ordersUrl + "/orders", httpOptions);
  }

  public getOrderById(id: String): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get(this._ordersUrl + "/orders/" + id, httpOptions);
  }

  public createOrder(order: Order): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    let body: any = JSON.stringify(order);

    return this._http.post(this._ordersUrl + "/orders", body, httpOptions);
  }

  public updateOrder(id: String, order: Order): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    let body: any = JSON.stringify(order);

    return this._http.put(this._ordersUrl + "/orders/" + id, body, httpOptions);
  }

  public deleteOrder(id: String): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this._http.delete(this._ordersUrl + "/orders/" + id, httpOptions);
  }
}
