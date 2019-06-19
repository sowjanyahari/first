import { Component, OnInit } from '@angular/core';
import { Franchise } from 'src/app/models/FranchiseModel/franchise.model';
import { FranchiseService } from 'src/app/service/franchise/franchise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franchise-solution-list',
  templateUrl: './franchise-solution-list.component.html',
  styleUrls: ['./franchise-solution-list.component.css']
})
export class FranchiseSolutionListComponent implements OnInit {
  private franchises:Franchise;
  constructor(private router:Router, private franchiseService:FranchiseService) { }

  ngOnInit() {this.franchiseService.getFranchiseSolution()
    .subscribe(data =>
      {
        this.franchises=data;
        console.log(this.franchises);
      }
      )

  };
  public getFranchise(franchi){
    this.franchiseService.setter(franchi);
    this.router.navigate(['/franchise-details'])
  }

}
