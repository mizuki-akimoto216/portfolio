import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent {

  workDetail:any;

  serverURL = environment.server;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit():void {

    let workTag = this.route.snapshot.paramMap.get("workTag");

    this.http.get<any>(this.serverURL + '/api/work-details?filters[workTag][$eq]=' + workTag + '&populate=*').subscribe(resposive => {
      this.workDetail = resposive.data[0];
    })
  }
}
