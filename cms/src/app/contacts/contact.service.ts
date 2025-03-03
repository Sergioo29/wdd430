import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>(); // ✅ Used for selection
  contactListChangedEvent = new Subject<Contact[]>(); // ✅ Used for list updates

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice(); // ✅ Return a copy to prevent direct modification
  }

  getContact(id: string): Contact | null {
    return this.contacts.find((contact) => contact.id === id) || null;
  }

  addContact(newContact: Contact) {
    this.contacts.push(newContact);
    this.contactListChangedEvent.next([...this.contacts]); // ✅ Notify subscribers
  }

  updateContact(index: number, updatedContact: Contact) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts[index] = updatedContact;
      this.contactListChangedEvent.next([...this.contacts]); // ✅ Notify subscribers
    }
  }

  deleteContact(id: string) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.contactListChangedEvent.next([...this.contacts]); // ✅ Notify subscribers
  }
}
