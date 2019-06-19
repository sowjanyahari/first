import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/CustomerModel/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent  {
  title = 'Customer Issue';
  customer: Customer = new Customer();
  countries = [{'id':1, 'name':'Driver Delay'}, {'id':2, 'name': 'Mismatch/loss of goods'}, {'id':3, 'name': 'Transaction Issue'},{'id':4, 'name': 'Other Issue'}];
  a:any;
  model: any = {};
  constructor(private router: Router, private customerService: CustomerService) {

  }

  addCustomer(f:NgForm): void {
    this.customerService.addCustomer(this.customer)
    
        .subscribe( data => {
          this.customer=data;
          alert("Customer issue created successfully.");
         
        });
        f.resetForm();
      };
    welcome(event){
      var a=event.target.files[0].size;
      if(a>2000000){
        alert("Upload images size should be less than 2MB please change the image file");
        
      }
    

    }
  }
