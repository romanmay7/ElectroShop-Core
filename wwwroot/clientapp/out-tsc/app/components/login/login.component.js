import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(oservice, iservice, router) {
        this.oservice = oservice;
        this.iservice = iservice;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
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
                }
                else {
                    this.router.navigate(["checkout"]);
                }
            }
        }, err => this.errorMessage = "Failed to login");
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map