import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
    onSubmit() {
        alert("Form Submited");
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