import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  userdata:any
 
  constructor() { }
 
  setData(userName:any){
    this.userdata=userName;
    
  }
  getData(){
    return this.userdata;
   }
}
