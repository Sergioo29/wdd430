import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component'; // Import the ContactListComponent
import { ContactDetailComponent } from './contact-detail/contact-detail.component'; // Import the ContactDetailComponent

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, ContactListComponent, ContactDetailComponent], // Add ContactDetailComponent to imports
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {}
