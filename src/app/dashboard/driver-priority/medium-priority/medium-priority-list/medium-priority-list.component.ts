import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/DriverModel/driver.model';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver/driver.service';

@Component({
  selector: 'app-medium-priority-list',
  templateUrl: './medium-priority-list.component.html',
  styleUrls: ['./medium-priority-list.component.css']
})
export class MediumPriorityListComponent implements OnInit {
  private drivers:Driver;
  constructor(private router:Router,private driverService:DriverService) { }

  ngOnInit() {
this.driverService.getMediumPriorityList()
.subscribe (data=>{
  this.drivers=data;
  console.debug(this.drivers);
})
  }
}