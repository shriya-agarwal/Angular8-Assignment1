import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { MobileComponent } from './mobile/mobile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './parent2/child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './parent3/child3/child3.component';


const routes: Routes = [
  {path: 'car', component: CarComponent},
  {path: 'mobile', component: MobileComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path: 'parent2', component: Parent2Component},
  {path: 'child2', component: Child2Component},
  {path: 'parent3', component: Parent3Component},
  {path: 'child3', component: Child3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
