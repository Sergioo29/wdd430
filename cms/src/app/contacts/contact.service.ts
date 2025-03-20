import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>(); // Used for selection
  contactListChanged = new Subject<Contact[]>(); // Used for list updates
  private firebaseUrl = 'https://wdd430-angular-cms-3f260-default-rtdb.firebaseio.com/contacts.json';

  constructor(private http: HttpClient) {
    this.fetchContacts();
  }

  fetchContacts() {
    this.http.get<{ [key: string]: Contact }>(this.firebaseUrl).subscribe(
      (responseData) => {
        const contactsArray: Contact[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            contactsArray.push({ ...responseData[key], id: key }); // Store Firebase key as ID
          }
        }

        this.contacts = contactsArray;
        this.contactListChanged.next([...this.contacts]); // Emit updated list
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }

  getContacts(): Contact[] {
    return [...this.contacts]; // Return a copy to prevent modification
  }

  getContact(id: string): Contact | null {
    return this.contacts.find(contact => contact.id === id) || null;
  }

  addContact(newContact: Contact) {
    if (!newContact) return;

    this.http.post<{ name: string }>(this.firebaseUrl, newContact).subscribe(
      (response) => {
        newContact.id = response.name; // Firebase assigns a unique ID
        this.contacts.push(newContact);
        this.contactListChanged.next([...this.contacts]); // Notify changes
      },
      (error) => {
        console.error('Error adding contact:', error);
      }
    );
  }

  updateContact(originalContact: Contact, newContact: Contact): void {
    if (!originalContact || !newContact) return;

    const contactIndex = this.contacts.findIndex(c => c.id === originalContact.id);
    if (contactIndex < 0) return;

    const updateUrl = `https://wdd430-angular-cms-3f260-default-rtdb.firebaseio.com/contacts/${originalContact.id}.json`;

    this.http.put(updateUrl, newContact).subscribe(
      () => {
        this.contacts[contactIndex] = { ...newContact, id: originalContact.id };
        this.contactListChanged.next([...this.contacts]); // Emit updated list
      },
      (error) => {
        console.error('Error updating contact:', error);
      }
    );
  }

  deleteContact(id: string) {
    const deleteUrl = `https://wdd430-angular-cms-3f260-default-rtdb.firebaseio.com/contacts/${id}.json`;

    this.http.delete(deleteUrl).subscribe(
      () => {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        this.contactListChanged.next([...this.contacts]); // Notify changes
      },
      (error) => {
        console.error('Error deleting contact:', error);
      }
    );
  }
}
