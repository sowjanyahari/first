import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/CustomerModel/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component'

@Component({
  providers:[ CustomerListComponent],
  selector: 'app-customer-detailes',
  templateUrl: './customer-detailes.component.html',
  styleUrls: ['./customer-detailes.component.css']
})
export class CustomerDetailesComponent{
  customer:Customer;

 constructor(private router: Router,private customerService: CustomerService) {

 }


ngOnInit(){ 
    this.customer=this.customerService.getter();
    this.customerService.getCustomers(this.customer).subscribe();  
  }
  goBack(){
    this.router.navigateByUrl('/customerlist');
  }
  updateCustomer(){
   if( this.customer.customer_Id==undefined)
   {
     this.customerService.addCustomer(this.customer)
     .subscribe(data=>{
      alert("Customer created Successfuly")
     });
   }
   else{
    this.customerService.updateCustomer(this.customer)
    .subscribe(data=>{
      alert("Customer detailes update successfully");
      this.router.navigate(['/customerlist']);
    });
  }

  }
}
