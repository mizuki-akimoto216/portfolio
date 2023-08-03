import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    WorkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
