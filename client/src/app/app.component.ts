import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'skinet';
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/products').subscribe({
      next: response => console.log(response),// what to do next
      error: error => console.log(error),// what to do if there is an error
      complete: () =>{
        console.log('request completed');
        console.log('extra statements');
      }
    })
  }
}
