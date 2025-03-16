import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact.model';

@Pipe({
  name: 'contactsFilter',
  standalone: true
})
export class ContactsFilterPipe implements PipeTransform {
  transform(contacts: Contact[], term: string): Contact[] {
    if (!term || term.trim().length === 0) {
      return []; // ✅ Return an empty array when there's no search term
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
