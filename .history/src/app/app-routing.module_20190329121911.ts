import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { OperatorComponent } from './operator/operator.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'franchise', component: FranchiseComponent},
  {path: 'operator', component: OperatorComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
