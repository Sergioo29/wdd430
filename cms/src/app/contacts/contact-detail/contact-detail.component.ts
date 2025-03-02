import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from '../contact.model';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  @Input() contact!: Contact;  // Input to receive contact from the parent
}
