import { Component } from '@angular/core';
import { Contact } from './contact.model';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-contacts',
  standalone: true,
  imports: [CommonModule, ContactListComponent, ContactDetailComponent], // Import ContactDetailComponent
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  selectedContact: Contact | null = null; // Holds the selected contact

  // This method gets triggered when the event is emitted
  onContactSelected(contact: Contact): void {
    this.selectedContact = contact; // Assign the selected contact to the class variable
  }
}
