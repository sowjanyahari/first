import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Driver } from 'src/app/models/DriverModel/driver.model';
import { DriverService } from 'src/app/service/driver/driver.service';

@Component({
  selector: 'app-driver-prority-list',
  templateUrl: './driver-prority-list.component.html',
  styleUrls: ['./driver-prority-list.component.css']
})
export class DriverProrityListComponent implements OnInit {
  private drivers:Driver;
 
  constructor(private router:Router, private driverService:DriverService) { }

  ngOnInit() {
    this.driverService.getDriverPriorityList()
    .subscribe(data =>
      {
        this.drivers=data;
        console.log(this.drivers);
      }
      )

  };
  getDriverPriority(drive){
    this.driverService.setter(drive);
    this.router.navigate(['/driver-view'])
   }
  }

