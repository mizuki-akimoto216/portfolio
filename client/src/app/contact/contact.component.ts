import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email:string = '';
  name:string = '';
  message:string = '';
  hideErrorMessage = true;
  hideSuccessMessage = true;
  serverURL = environment.server;

  constructor(private http:HttpClient){}

  submitForm(){
    console.log(this.email, this.name, this.message);
    let formdata = {
      data:{
        "name": this.name,
        "email": this.email,
        "message": this.message
      }
    };
    this.http.post<any>(this.serverURL + '/api/leads', formdata).subscribe( res => {
      console.log(res);
      if(res.data === null) {
        this.hideErrorMessage = false;
        this.hideSuccessMessage = true;
      } else {
        this.hideErrorMessage = true;
        this.hideSuccessMessage = false;

      }
    })
  }
}
