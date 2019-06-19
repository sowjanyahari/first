import { Component, OnInit } from '@angular/core';
import{Driver} from 'src/app/models/DriverModel/driver.model';
import { DriverService } from 'src/app/service/driver/driver.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  private drive:Driver;
  constructor(private driverService:DriverService,private router:Router) { }

  ngOnInit() {
    this.drive=this.driverService.getter()
  }
  updateDriver(){
  
    if
    (this.drive.driverId==undefined)
    {
    this.driverService.createDriver(this.drive)
    .subscribe(
      data =>{
        
        alert("Driver created successfully")
      });
    }
  else{
    this.driverService.updateDriver(this.drive)
    .subscribe(
      data =>{
        
        alert("Driver update  successfully")
        this.router.navigate(['/driver-solution-list']);
      });
  }

}
updateDriverPriority(){
  if
    (this.drive.driverId==undefined)
    {
    this.driverService.createDriver(this.drive)
    .subscribe(
      data =>{
        
        alert("Driver created successfully")
      });
    }
  else{
    this.driverService.updateDriverPriority(this.drive)
    .subscribe(
      data =>{
        
        alert("DriverPriority update  successfully")
        this.router.navigate(['/driver-priority-list']);
      });

}
}
}
  