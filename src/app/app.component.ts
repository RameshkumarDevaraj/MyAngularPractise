import { Component, OnInit } from '@angular/core';
import { BackofficeService } from './backoffice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bhav Copy Details';
  restAPIResult: any = [];
  cols: any[];
  constructor(private service: BackofficeService) {

  }
  ngOnInit() {
   this. getdata();
   this.cols = [
    { field: 'symbol', header: 'SYMBOL' },
    { field: 'high', header: 'High' },
    { field: 'open', header: 'Open' },
    { field: 'xDt', header: 'Expiry Date' },
   
];
  }

  // this.service.fetchData().subscribe((data: {}) => {
  getdata() {
    this.restAPIResult = [];
    this.service.fetchData().subscribe(data => {
      console.log("Mydata"+data.data);
      this.restAPIResult = data.data;
    });
  }

 



  
}