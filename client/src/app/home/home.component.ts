import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  // WorkList
  workList:any[] = [];

  constructor(private http: HttpClient){}
  
  ngOnInit():void {

    this.http.get<any>('http://localhost:1337/api/work-lists?populate=*').subscribe(response => {
      this.workList = response.data.slice(0, 6);
    })
  }
}
