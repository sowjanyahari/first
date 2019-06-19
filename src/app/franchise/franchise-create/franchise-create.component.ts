import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Franchise } from 'src/app/models/FranchiseModel/franchise.model';
import { FranchiseService } from 'src/app/service/franchise/franchise.service';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-franchise-create',
  templateUrl: './franchise-create.component.html',
  styleUrls: ['./franchise-create.component.css']
})
export class FranchiseCreateComponent implements OnInit {

  franchise:Franchise=new Franchise();
  constructor(private router:Router,private franchiseService:FranchiseService,private formBuilder:FormBuilder) { }

  ngOnInit() {
  }
  addFranchise(f:NgForm){
    this.franchiseService.createFranchise(this.franchise)
    .subscribe(
      data =>{
        
        alert("Franchise created successfully")
      });
      f.resetForm();
  };


}
