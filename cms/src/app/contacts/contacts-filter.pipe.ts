import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact.model';

@Pipe({
  name: 'contactsFilter',
  standalone: true // ✅ Make it standalone so it can be imported in a standalone component
})
export class ContactsFilterPipe implements PipeTransform {
  transform(contacts: Contact[], term: string): Contact[] {
    if (!contacts || !term) {
      return contacts; // Return all contacts if no search term is entered
    }

    return contacts.filter(
      (contact: Contact) => contact.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
