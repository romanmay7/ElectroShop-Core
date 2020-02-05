import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private oservice: OrderService, private iservice: ItemService, private router: Router) { }

    errorMessage: string = "";
    public creds = {
        username: "",
        password: ""
    }

  ngOnInit() {
  }

    onLogin() {

        //Call the Login Service
        // alert(this.creds.username);
        this.oservice.login(this.creds)
            .subscribe(success => {
                if (success) {
                    //Save Username in Items Service to track logged in user
                    this.iservice.username = this.creds.username;
                    this.iservice.loggedIn = true;
                    if (this.iservice.items.length == 0) {
                        this.router.navigate(["shop"]);
                    } else {
                        this.router.navigate(["checkout"]);
                    }
                }

            }, err => this.errorMessage = "Failed to login")
    }
}





