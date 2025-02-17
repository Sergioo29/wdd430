import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';
import { ContactItemComponent } from '../contact-item/contact-item.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Output() selectedContactEvent = new EventEmitter<Contact>();  // EventEmitter for selected contact

  contacts: Contact[] = [
    new Contact("1", "R. Kent Jackson", "jacksonk@byui.edu", "208-496-3771", "../../assets/images/jacksonk.jpg", []),
    new Contact("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../assets/images/barzeer.jpg", [])
  ];

  // Method to emit the selected contact
  onSelected(contact: Contact): void {
    this.selectedContactEvent.emit(contact);  // Emit the selected contact
  }
}
