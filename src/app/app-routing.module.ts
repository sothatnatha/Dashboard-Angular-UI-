import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardLayoutComponent } from './layouts/main-dashboard-layout/main-dashboard-layout.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { FrontHeaderComponent } from './shared/front-header/front-header.component';

const routes: Routes = [
  { 
    path: '',  component: MainDashboardLayoutComponent,
    children: [
      { path: '', component: HomeDashboardComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
