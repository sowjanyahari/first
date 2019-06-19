import { Component, OnInit } from '@angular/core';
import { FranchiseService } from 'src/app/service/franchise/franchise.service';
import { Router } from '@angular/router';
import { Franchise } from 'src/app/models/FranchiseModel/franchise.model';

@Component({
  selector: 'app-franchise-details',
  templateUrl: './franchise-details.component.html',
  styleUrls: ['./franchise-details.component.css']
})
export class FranchiseDetailsComponent implements OnInit {
  franchi:Franchise;
  constructor(private router:Router,private franchiseService:FranchiseService ) { }

  ngOnInit() {
   this.franchi= this.franchiseService.getter();
  }
  updateFranchise(){
    if
    (this.franchi.franchiseId==undefined)
    {
    this.franchiseService.createFranchise(this.franchi)
    .subscribe(
      data =>{
        
        alert("Franchise created successfully")
      });
    }
  else{
    this.franchiseService.updateFranchise(this.franchi)
    .subscribe(
      data =>{
        
        alert("Franchise update  successfully")
        this.router.navigate(['/franchise-solution']);
      });
  }

}


}
