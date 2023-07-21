import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  // WorkList
  workList:any[] = [];

  serverURL = environment.server;
  isProduction = environment.production;

  constructor(private http: HttpClient){}
  
  ngOnInit():void {

    this.http.get<any>(this.serverURL + '/api/work-lists?populate=*').subscribe(response => {
      this.workList = response.data.slice(0, 6);

      if(this.isProduction){
        this.serverURL = ""
      }
    })
  }
}
