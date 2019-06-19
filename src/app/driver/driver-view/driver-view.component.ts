import { Component, OnInit } from '@angular/core';
import{Driver} from 'src/app/models/DriverModel/driver.model';
import { DriverService } from 'src/app/service/driver/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-view',
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.css']
})
export class DriverViewComponent implements OnInit {
  private drive:Driver;
  constructor(private driverService:DriverService,private router:Router) { }

  ngOnInit() {
    this.drive=this.driverService.getter()
  }
}
  
