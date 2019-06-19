import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { OperatorComponent } from './operator/operator.component';
import { CustomerDetailesComponent } from './customer/customer-detailes/customer-detailes.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { SolvedIssuesComponent } from './customer/solved-issues/solved-issues.component';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverViewComponent } from './driver/driver-view/driver-view.component';
import { DriverSolutionListComponent } from './driver/driver-solution-list/driver-solution-list.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { FranchiseCreateComponent } from './franchise/franchise-create/franchise-create.component';
import { FranchiseListComponent } from './franchise/franchise-list/franchise-list.component';
import { FranchiseDetailsComponent } from './franchise/franchise-details/franchise-details.component';
import { FranchiseViewComponent } from './franchise/franchise-view/franchise-view.component';
import { FranchiseSolutionListComponent } from './franchise/franchise-solution-list/franchise-solution-list.component';
import { DriverProrityListComponent } from './driver/driver-prority-list/driver-prority-list.component';
import { HighPriorityListComponent } from './dashboard/driver-priority/high-priority-list/high-priority-list.component';
import { DriverPriorityComponent } from './dashboard/driver-priority/driver-priority.component';
import { LowPriorityListComponent } from './dashboard/driver-priority/low-priority/low-priority-list/low-priority-list.component';
import { MediumPriorityListComponent } from './dashboard/driver-priority/medium-priority/medium-priority-list/medium-priority-list.component';
const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'operator', component: OperatorComponent},
  {path: 'registration', component:RegistrationComponent},

  {path: 'customer', component: CustomerCreateComponent},
  {path: 'customerlist', component: CustomerListComponent},
  {path: 'customerdetailes', component:CustomerDetailesComponent },

  {path: 'driver-form', component: DriverCreateComponent},
  {path: 'driver-list',component:DriverListComponent},
  {path: 'driver-detail',component:DriverDetailsComponent},
  {path:'solution-list',component:DriverSolutionListComponent},
  {path:'driver-view',component:DriverViewComponent},
  {path:'driver-priority-list',component:DriverProrityListComponent},
  {path:'driver-priority/highprioritylist',component:HighPriorityListComponent},
  {path:'driver-priority/lowprioritylist',component:LowPriorityListComponent},
  {path:'driver-priority',component:DriverPriorityComponent},
  {path:'driver-priority/mediumprioritylist',component:MediumPriorityListComponent},
 
  {path: 'solutionList', component:SolvedIssuesComponent},
  {path:'franchise-create',component:FranchiseCreateComponent},
  {path:'franchise-list',component:FranchiseListComponent},
  {path:'franchise-details',component:FranchiseDetailsComponent},
  {path:'franchise-solution',component:FranchiseSolutionListComponent},
  {path:'franchise-view',component:FranchiseViewComponent}
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
