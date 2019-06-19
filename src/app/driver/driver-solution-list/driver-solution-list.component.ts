import { Component, OnInit } from '@angular/core';
import{Driver} from 'src/app/models/DriverModel/driver.model';
import { DriverService } from 'src/app/service/driver/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-solution-list',
  templateUrl: './driver-solution-list.component.html',
  styleUrls: ['./driver-solution-list.component.css']
})
export class DriverSolutionListComponent implements OnInit {
  private drivers:Driver;
 
  constructor(private router:Router, private driverService:DriverService) { }

  ngOnInit() {
    this.driverService.getDriverSolution()
    .subscribe(data =>
      {
        this.drivers=data;
        console.log(this.drivers);
      }
      )

  };
  getDriver(drive){
    this.driverService.setter(drive);
    this.router.navigate(['/driver-view'])
   }
  }

