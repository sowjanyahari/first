import { Component, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/CustomerModel/customer.model';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { a } from '@angular/core/src/render3';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  title = 'Customer Issue List' ;
  customers: Customer;
  customer:Customer;

  a:any;
  constructor(private router: Router,private customerService: CustomerService) {
  }
  ngOnInit() {
       this.customerService.getCustomer()
      .subscribe( data => {
        this.customers = data ; 
      });
  }
  
  
 public getCustomers(customer){
 this.customerService.setter(customer);
};
  

}