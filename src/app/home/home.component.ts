import { Component} from '@angular/core';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  isdisabled:boolean=true;

  
  counter:number=0;
  increment(){
    this.counter+=1
  }
  
  Username:any
  constructor(public UserService:UserServiceService){

  }
  setData(){
    this.UserService.setData(this.Username)
  }
  getData(){
    const data = this.UserService.getData()
    console.log('Data',data)
  }
  title='Angular';
  city="hyderabad"

  updateCity(){
    this.city ='bangalore'
  }
  checkValue='prohack world'


  titleClass = 'custom-class'; // Replace 'custom-class' with your desired class name


  divStylings={'background-color':'green','color':'white',}

  checkStatus=false
  divSuccessStylings={'color':'green'}
  divErrorStylings={'color':'red'}



  items = ['Item 1', 'Item 2', 'Item 3'];



  userRole: string | undefined = 'Admin';
//   userRole: string | undefined;
 isUserLoggedIn = false;


 login() {
   this.isUserLoggedIn = true;
   this.userRole = 'Admin'; // Simulating user login with a role
 }

 logout() {
   this.isUserLoggedIn = false;
   this.userRole = undefined;
 }


}
