import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/DriverModel/driver.model';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver/driver.service';

@Component({
  selector: 'app-high-priority-list',
  templateUrl: './high-priority-list.component.html',
  styleUrls: ['./high-priority-list.component.css']
})
export class HighPriorityListComponent implements OnInit {
 private drivers:Driver;
  constructor(private router:Router,private driverService:DriverService) { }

  ngOnInit() {
this.driverService.getHighPriorityList()
.subscribe (data=>{
  this.drivers=data;
  console.debug(this.drivers);
})
  }
  
  
  //getPrioritys(highprioritylist){
   // this.driverService.setter(highprioritylist);
    //this.router.navigate(['/highpriorityview'])
    
  }


