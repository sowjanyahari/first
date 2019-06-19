import { Component, OnInit } from '@angular/core';
import{Driver} from 'src/app/models/DriverModel/driver.model';
import { DriverService } from 'src/app/service/driver/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  private drivers:Driver;

  constructor(private router:Router, private driverService:DriverService) { }


  ngOnInit() {
    this.driverService.getDriverList()
    .subscribe(data =>
      {
        this.drivers=data;
        console.log(this.drivers);
      }
      )

  };

 public getDriver(drive){
 this.driverService.setter(drive);
  this.router.navigate(['/driver-detail'])
 }
 //public getDriver(drive){
  // this.driverService.getDriver(drive);
   //this.router.navigate(['/driver-detail'])
 //}

}