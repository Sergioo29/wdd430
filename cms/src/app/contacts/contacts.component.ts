import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';
import { ContactListComponent } from './contact-list/contact-list.component'; 
import { ContactDetailComponent } from './contact-detail/contact-detail.component'; 

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, ContactListComponent, ContactDetailComponent], // ✅ Add imports
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact!: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe((contact: Contact) => {
      this.selectedContact = contact;
    });
  }
}
