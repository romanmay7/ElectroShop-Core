import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor() {
        //contactForm: FormGroup;
        this.contact_form = {
            fname: "",
            lname: "",
            email: "",
            comment: ""
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        alert('Form Submited!! :-)\n\n' + JSON.stringify(this.contact_form));
    }
};
ContactComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map