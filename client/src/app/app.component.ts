import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private service: CommonService){}

  changeLocale(locale: string) {
    this.service.locale = locale;
    console.log(this.service.locale);
  }

}
