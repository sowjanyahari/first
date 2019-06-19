import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'side-nav', component: SideNavComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
