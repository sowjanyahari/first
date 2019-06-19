import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatFormField, MatInput, MatFormFieldModule, MatInputModule, MatSelectModule, MatLabel } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { CustomerComponent } from './customer/customer.component';
import { OperatorComponent } from './operator/operator.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailesComponent } from './customer/customer-detailes/customer-detailes.component';
import { RegistrationComponent } from './registration/registration.component';
import { SolvedIssuesComponent } from './customer/solved-issues/solved-issues.component';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverSolutionListComponent } from './driver/driver-solution-list/driver-solution-list.component';
import { DriverViewComponent } from './driver/driver-view/driver-view.component';
import { FranchiseCreateComponent } from './franchise/franchise-create/franchise-create.component';
import { FranchiseDetailsComponent } from './franchise/franchise-details/franchise-details.component';
import { FranchiseListComponent } from './franchise/franchise-list/franchise-list.component';
import { FranchiseSolutionListComponent } from './franchise/franchise-solution-list/franchise-solution-list.component';
import { FranchiseViewComponent } from './franchise/franchise-view/franchise-view.component';
import { CustomerService } from './service/customer/customer.service';
import { DriverProrityListComponent } from './driver/driver-prority-list/driver-prority-list.component';
import { HighPriorityListComponent } from './dashboard/driver-priority/high-priority-list/high-priority-list.component';
import { HighPriorityGraphComponent } from './dashboard/driver-priority/high-priority-graph/high-priority-graph.component';
import { DriverPriorityComponent } from './dashboard/driver-priority/driver-priority.component';
import { LowPriorityComponent } from './dashboard/driver-priority/low-priority/low-priority.component';
import { LowPriorityListComponent } from './dashboard/driver-priority/low-priority/low-priority-list/low-priority-list.component';
import { LowPriorityGraphComponent } from './dashboard/driver-priority/low-priority/low-priority-graph/low-priority-graph.component';
import { MediumPriorityComponent } from './dashboard/driver-priority/medium-priority/medium-priority.component';
import { MediumPriorityGraphComponent } from './dashboard/driver-priority/medium-priority/medium-priority-graph/medium-priority-graph.component';
import { MediumPriorityListComponent } from './dashboard/driver-priority/medium-priority/medium-priority-list/medium-priority-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    DriverComponent,
    CustomerComponent,
    OperatorComponent,
    FranchiseComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerDetailesComponent,
    RegistrationComponent,
    SolvedIssuesComponent,
    DriverCreateComponent,
    DriverDetailsComponent,
    DriverListComponent,
    DriverSolutionListComponent,
    DriverViewComponent,
    FranchiseCreateComponent,
    FranchiseDetailsComponent,
    FranchiseListComponent,
    FranchiseSolutionListComponent,
    FranchiseViewComponent,
    DriverProrityListComponent,
    HighPriorityListComponent,
    HighPriorityGraphComponent,
    DriverPriorityComponent,
    LowPriorityComponent,
    LowPriorityListComponent,
    LowPriorityGraphComponent,
    MediumPriorityComponent,
    MediumPriorityGraphComponent,
    MediumPriorityListComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
