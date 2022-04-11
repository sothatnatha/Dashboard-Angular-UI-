import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontHeaderComponent } from './shared/front-header/front-header.component';
import { FrontFooterComponent } from './shared/front-footer/front-footer.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MainDashboardLayoutComponent } from './layouts/main-dashboard-layout/main-dashboard-layout.component';
import { FrontSidebarComponent } from './shared/front-sidebar/front-sidebar.component';
import { FrontRightSidebarComponent } from './shared/front-right-sidebar/front-right-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';






@NgModule({
  declarations: [
    AppComponent,
    FrontHeaderComponent,
    FrontFooterComponent,
    MainFrontLayoutComponent,
    HomeDashboardComponent,
    ContactUsComponent,
    AboutUsComponent,
    MainDashboardLayoutComponent,
    FrontSidebarComponent,
    FrontRightSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
