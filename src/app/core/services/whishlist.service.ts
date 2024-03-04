import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`;

  heartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addToWhishList(prodId:string|undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `wishlist`,
    {
      productId:prodId
    }
    )
  }

  getWhishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `wishlist`)
  }

  removeToWhishList(prodId:string|undefined):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}`);
  }
}
