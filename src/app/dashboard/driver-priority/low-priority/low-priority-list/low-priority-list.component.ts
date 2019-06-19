import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/DriverModel/driver.model';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver/driver.service';

@Component({
  selector: 'app-low-priority-list',
  templateUrl: './low-priority-list.component.html',
  styleUrls: ['./low-priority-list.component.css']
})
export class LowPriorityListComponent implements OnInit {
  private drivers:Driver;
  constructor(private router:Router,private driverService:DriverService) { }

  ngOnInit() {
this.driverService.getLowPriorityList()
.subscribe (data=>{
  this.drivers=data;
  console.debug(this.drivers);
})
  }
}