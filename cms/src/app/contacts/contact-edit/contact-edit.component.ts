import { Component } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component'; // Adjust the path if needed
import { Contact } from '../contact.model'; // Adjust the path if needed

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [ContactItemComponent], // Import the necessary component
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  contacts: Contact[] = []; // Example contacts array

  onRemoveItem(index: number): void {
    this.contacts.splice(index, 1);
  }

  onCancel(): void {
    // Logic to cancel editing (e.g., navigate back or reset form)
    console.log("Edit canceled");
  }
}
