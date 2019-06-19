import { Component, OnInit } from '@angular/core';
import { Franchise } from 'src/app/models/FranchiseModel/franchise.model';
import { FranchiseService } from 'src/app/service/franchise/franchise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franchise-view',
  templateUrl: './franchise-view.component.html',
  styleUrls: ['./franchise-view.component.css']
})
export class FranchiseViewComponent implements OnInit {
  private franchise:Franchise;
  constructor(private franchiseService:FranchiseService,private router:Router) { }

  ngOnInit() {
    this.franchise=this.franchiseService.getter();
  }

}
