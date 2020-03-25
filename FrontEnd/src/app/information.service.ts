import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  // data = [
  //   {
  //     userName:'wow', 
  //     role: 'admin',
  //     token:'MOHAMEDASH'
  //   },
  //   {
  //     userName:'wow', 
  //     role: 'emp',
  //     token:'EMPONE'
  //   }
  // ] 

  constructor( private http : HttpClient) { }

  
  tokenInfoTable(token) {
    return this.http.get(`${environment.baseUrl}/api/user/${token}`).toPromise();
  }
}
