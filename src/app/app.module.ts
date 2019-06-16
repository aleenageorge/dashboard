import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    DetailComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path : 'main',
        component: MainComponent
      },
      {
        path : 'dashboard',
        component: DashboardComponent
      },
      {
        path : 'detail',
        component: DetailComponent
      },
      {
        path : 'department',
        component: DepartmentComponent
      },
      {
        path: '**',
        component: DashboardComponent
      },
      {
        path: '',
        component: DashboardComponent
      }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
