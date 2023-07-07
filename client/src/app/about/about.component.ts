import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  careerList:any[] = [];
  skillList:any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit():void {
    this.http.get<any>('http://localhost:1337/api/careers?populate=*').subscribe(response => {
      this.careerList = response.data;
    })

    this.http.get<any>('http://localhost:1337/api/skills?populate=*').subscribe(response => {
      this.skillList = response.data;
    })
  }
}
