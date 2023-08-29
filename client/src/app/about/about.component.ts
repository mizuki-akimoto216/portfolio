import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  careerList:any[] = [];
  careerEnList:any[] = [];
  skillList:any[] = [];
  serverURL = environment.server;
  isProduction = environment.production;

  constructor(private http: HttpClient, private service: CommonService){}

  ngOnInit():void {
    this.http.get<any>(this.serverURL + '/api/careers?locale=' + this.service.locale).subscribe(response => {
      this.careerList = response.data;
    })

    this.http.get<any>(this.serverURL + '/api/skills?populate=*').subscribe(response => {
      this.skillList = response.data;
    })

    if(this.isProduction){
      this.serverURL = ""
    }
  }
}
