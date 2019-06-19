import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Driver } from 'src/app/models/DriverModel/driver.model'

const httpOptions={
  headers: new HttpHeaders({'content Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DriverService {
private drive:Driver;

  constructor(private http:HttpClient) { }

createDriver(driver){
    return this.http.post<Driver>('http://localhost:8002/111/create',driver);
}
getDriverList(){
  return this.http.get<Driver>('http://localhost:8002/111/getDrivers');
}
getDriver(driver){
  return this.http.get<Driver>('http://localhost:8002/111/getDriver/'+ driver.driverId);
}
updateDriver(driver){
  return this.http.put<Driver>('http://localhost:8002/111/update',driver);
}
getDriverSolution(){
  return this.http.get<Driver>('http://localhost:8002/111/getDriverSolution');
}
updateDriverPriority(driver){
  return this.http.put<Driver>('http://localhost:8002/111/updatepriority',driver);
}
getDriverPriorityList(){
  return this.http.get<Driver>('http://localhost:8002/111/getPriorityList');
}
getHighPriorityList(){
  return this.http.get<Driver>('http://localhost:8002/111/HighPriorityCount');
}
getLowPriorityList(){
  return this.http.get<Driver>('http://localhost:8002/111/LowPriority');
}

getMediumPriorityList(){
  return this.http.get<Driver>('http://localhost:8002/111/MediumPriority');
}
setter(drive:Driver){
  this.drive=drive;
}
getter(){
  return this.drive;
}
}