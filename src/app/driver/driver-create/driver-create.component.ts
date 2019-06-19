import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver/driver.service';
import { Driver } from 'src/app/models/DriverModel/driver.model';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {
  driver: Driver =new Driver();


  constructor(private router:Router,private driverService:DriverService,private formBuilder:FormBuilder) { }

  ngOnInit():void {
  }
  addDriver(f:NgForm){
    this.driverService.createDriver(this.driver)
    .subscribe(
      data =>{
        
        alert("Driver created successfully")
      });
      f.resetForm();
  };

}
