import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  workList:any[] = [];
  webAppList:any[] = [];
  uiuxList:any[] = [];
  webDesignList:any[] = [];
  serverURL = environment.server;

  constructor(private http: HttpClient){}

  ngOnInit():void {
    this.http.get<any>(this.serverURL + '/api/work-lists?populate=*').subscribe(response => {
      this.workList = response.data;
    })

    this.http.get<any>(this.serverURL + '/api/work-lists?filters[category][$eq]=webapp&populate=*').subscribe(response => {
      this.webAppList = response.data;
    })

    this.http.get<any>(this.serverURL + '/api/work-lists?filters[category][$eq]=uiux&populate=*').subscribe(response => {
      this.uiuxList = response.data;
    })

    this.http.get<any>(this.serverURL + '/api/work-lists?filters[category][$eq]=webdesign&populate=*').subscribe(response => {
      this.webDesignList = response.data;
    })
  }
}
