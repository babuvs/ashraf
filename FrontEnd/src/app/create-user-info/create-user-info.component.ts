import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-info',
  templateUrl: './create-user-info.component.html',
  styleUrls: ['./create-user-info.component.scss']
})
export class CreateUserInfoComponent implements OnInit {
  token: any;
  isError: boolean;
  isSpinner: boolean;
  isCount: boolean;
  count: number;
  data: any;


  constructor(private info: InformationService, private router: Router) { }

 ngOnInit() {
   
 }
  
  async userToken(event) {
    try {
      const tokenTotalLength = 10;
      let userToken = event.target.value;
      userToken = userToken ? userToken.trim() : userToken;
      userToken = userToken ? userToken.toUpperCase() : userToken;
      event.target.value = userToken.replace(/[&\/\\#\s,@^!+()$~%.'":*?<>{}]/g, '');
      if(userToken && userToken.length == 10) {
        const data = await this.info.tokenInfoTable(userToken);
        console.log(data);
        this.data = data;
      } 
    } catch(err) {
      console.log(err);
    }
    
    // if(userToken && userToken.length != 10) {
    //   this.isError = false;
    //   this.isSpinner = false;
    //   this.count = userToken.length - tokenTotalLength;
    //   this.isCount = true;
    // }
    // this.data = [];
    // if(userToken && userToken.length == 10) {
    //   this.isCount = false;
    //   this.isSpinner = true;
      // const data = this.info.tokenInfoTable(userToken);
      // this.data = data;
      // if (data.length == 0){
      //   this.isError = true;
      //   this.isSpinner = false;
      //   this.setTimeOut();
      // }
    // }
  }
  
  superAdmin() {
     //this.router.navigateByUrl('super/admin');
     this.router.navigateByUrl('emp/screen/xerox');
  }

  tokenCheck() {
    setTimeout(() => {
      if(this.token && this.token.length != 10 && ! this.isError) {
        this.isError = true;
        this.setTimeOut();
      }
    }, 9000);
  }

  setTimeOut() {
    setTimeout(() => {
      this.isError =false;
    }, 3000);
  }
}
