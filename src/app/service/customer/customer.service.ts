import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from 'src/app/models/CustomerModel/customer.model';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class CustomerService {
private customer:Customer;
  constructor(private http:HttpClient) {}

  private customerUrl = 'http://localhost:8002/customerIssue';
  //private userUrl = '/api';

  public getCustomer() {
    return this.http.get<Customer>('http://localhost:8002/customerIssue/getCustomer');
  }

  public getCustomerSolution() {
    return this.http.get<Customer>('http://localhost:8002/customerIssue/getCustomerSolution');
  }

  public getCustomers(customer) {
    return this.http.get<Customer>('http://localhost:8002/customerIssue/getCustomers/'+customer.customer_Issue_Id);
  }


  public addCustomer(customer) {
    return this.http.post<Customer>('http://localhost:8002/customerIssue/addCustomer',customer);
  }

  public updateCustomer(customer) {
    return this.http.put<Customer>('http://localhost:8002/customerIssue/updateCustomer',customer);
  }
 
  public setter(customer:Customer){
    this.customer=customer;
  }

  public getter(){
    return this.customer;
  }
}

