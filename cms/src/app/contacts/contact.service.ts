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
    return [...this.contacts]; // Return a copy to prevent modification
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

  updateContact(originalContact: Contact, newContact: Contact): void {
    if (!originalContact || !newContact) {
      return;
    }

    const pos = this.contacts.findIndex(c => c.id === originalContact.id);
    if (pos < 0) {
      return;
    }

    // Update the contact at the found position
    this.contacts[pos] = { ...newContact, id: originalContact.id };

    // Emit event to update the list in UI
    this.contactListChanged.next([...this.contacts]);
  }

  deleteContact(id: string) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.contactListChanged.next([...this.contacts]); // Notify changes
  }
}
