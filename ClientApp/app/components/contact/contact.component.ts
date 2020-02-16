import { Component, OnInit } from '@angular/core';

 import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    //contactForm: FormGroup;
    public contact_form = {
        fname: "",
        lname: "",
        email: "",
        comment: ""
    }

  constructor() { }

  ngOnInit() {

  }

    onSubmit() {
        alert('Form Submited!! :-)\n\n' + JSON.stringify(this.contact_form))
  }


  }




