import { Injectable } from '@angular/core';
import { Franchise } from 'src/app/models/FranchiseModel/franchise.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  private franchi:Franchise;
  constructor(private http:HttpClient) { }
  createFranchise(franchise){
    return this.http.post<Franchise>('http://localhost:8002/111/createfranchise',franchise);
}
getFranchisesList(){
  return this.http.get<Franchise>('http://localhost:8002/111/getFranchises');
}
getFranhise(franchise){
  return this.http.get<Franchise>('http://localhost:8002/111/getFranchise/'+ franchise.franchiseId);
}
updateFranchise(franchise){
  return this.http.put<Franchise>('http://localhost:8002/111/updatefranchise',franchise);
}
getFranchiseSolution(){
  return this.http.get<Franchise>('http://localhost:8002/111/getFranchiseSolution');

}
setter(franchi:Franchise){
  this.franchi=franchi;
}
getter(){
 return this.franchi;
}
}
