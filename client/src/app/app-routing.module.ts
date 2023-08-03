import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'works', component: WorksComponent},
  {path:'contact', component: ContactComponent},
  {path:'workDetail', component: WorkDetailComponent},
  {path:'workDetail/:workTag', component: WorkDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
