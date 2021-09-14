import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  model = new Contact();

  submitted = false;

  onSubmit() {this.submitted = true;}

  constructor() { }

  ngOnInit(): void {
  }

}
