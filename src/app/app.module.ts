import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PresidentsComponent }      from './presidents.component';
import { PresidentDetailComponent }  from './president-detail.component';
import { PresidentService }          from './president.service';
import { PresidentSearchComponent }  from './president-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PresidentDetailComponent,
    PresidentsComponent,
    PresidentSearchComponent
  ],
  providers: [ PresidentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
