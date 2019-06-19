import { Component, OnInit } from '@angular/core';
import { FranchiseService } from 'src/app/service/franchise/franchise.service';
import { Router } from '@angular/router';
import { Franchise } from 'src/app/models/FranchiseModel/franchise.model';

@Component({
  selector: 'app-franchise-list',
  templateUrl: './franchise-list.component.html',
  styleUrls: ['./franchise-list.component.css']
})
export class FranchiseListComponent implements OnInit {

  private franchises:Franchise;
  constructor(private router:Router, private franchiseService:FranchiseService) { }

  ngOnInit() {
  this.franchiseService.getFranchisesList()
  .subscribe(data=>
    {
      this.franchises=data;
      console.log(this.franchises);
    })
  };
public getFranchise(franchise){
  this.franchiseService.setter(franchise);
  this.router.navigate(['/franchise-details'])
}

}
