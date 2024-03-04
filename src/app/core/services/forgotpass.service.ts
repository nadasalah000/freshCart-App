import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpassService {

  constructor(private _HttpClient:HttpClient) { }

  bseUrl:string = `https://ecommerce.routemisr.com/api/v1/auth/`

  forgotPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.bseUrl + `forgotPasswords`,userEmail)
  }

  resetCode(resetCode:object):Observable<any>{
    return this._HttpClient.post(this.bseUrl + `verifyResetCode`,resetCode)
  } 

  resetPassword(resetPassword:object):Observable<any>{
    return this._HttpClient.put(this.bseUrl + `resetPassword`,resetPassword)
  }
}
