import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm:FormGroup;
  constructor(form:FormBuilder){
    this.contactForm=form.group({
      "name":form.control("",{validators: Validators.required,updateOn:"submit"}),
      "email":form.control("",{validators: Validators.required,updateOn:"submit"}),
      "message":form.control("",{validators: Validators.required,updateOn:"submit"})
    });
  }
}
