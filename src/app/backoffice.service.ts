import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//     response.addHeader("Access-Control-Allow-Origin", "*");
//   })
// };

// private extractData(res: Response) {
//   let body = res;
//   return body || {};
// }


export class BackofficeService {


  baseUrl: string = 'https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json';

  resultData: any;

  constructor(private http: HttpClient) { }



  
  fetchData(): Observable<any> {

    return this.http
      .get(this.baseUrl)
      .pipe(map(data => data));
  }
}
