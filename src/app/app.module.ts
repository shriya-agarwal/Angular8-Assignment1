import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { MobileComponent } from './mobile/mobile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './parent2/child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './parent3/child3/child3.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    MobileComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
