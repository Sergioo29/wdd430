import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>(); // Used for selection
  contactListChanged = new Subject<Contact[]>(); // Used for list updates
  maxContactId: number; // Stores the highest ID

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId(); // Initialize maxContactId
  }

  getContacts(): Contact[] {
    return this.contacts.slice(); // Return a copy to prevent modification
  }

  getContact(id: string): Contact | null {
    return this.contacts.find(contact => contact.id === id) || null;
  }

  getMaxId(): number {
    let maxId = 0;

    for (let contact of this.contacts) {
      const currentId = parseInt(contact.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }

    return maxId;
  }

  addContact(newContact: Contact) {
    if (!newContact) return;

    this.maxContactId++;
    newContact.id = this.maxContactId.toString(); // Assign new unique ID
    this.contacts.push(newContact);

    this.contactListChanged.next([...this.contacts]); // Notify changes
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) return;

    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) return; // Contact not found

    newContact.id = originalContact.id; // Keep the same ID
    this.contacts[pos] = newContact;

    this.contactListChanged.next([...this.contacts]); // Notify changes
  }

  deleteContact(id: string) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.contactListChanged.next([...this.contacts]); // Notify changes
  }
  
}
