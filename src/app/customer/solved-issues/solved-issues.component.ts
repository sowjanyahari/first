import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { Customer } from 'src/app/models/CustomerModel/customer.model';


@Component({
  selector: 'app-solved-issues',
  templateUrl: './solved-issues.component.html',
  styleUrls: ['./solved-issues.component.css']
})
export class SolvedIssuesComponent implements OnInit {
  customer: Customer;
  
  constructor(private router: Router,private customerService: CustomerService) {
  }
  ngOnInit() {
       this.customerService.getCustomerSolution()
      .subscribe( data => {
        this.customer = data ; 
        console.log(this.customer);
      });
  }
}
