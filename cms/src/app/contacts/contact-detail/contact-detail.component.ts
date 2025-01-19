import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngIf and other directives
import { Contact } from '../contact.model'; // Import the Contact model

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for ngIf and other Angular directives
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  contact: Contact = new Contact(
    "1", "R. Kent Jackson", "jacksonk@byui.edu", "208-496-3771", 
    "../../assets/images/jacksonk.jpg", null
  ); // Dummy contact data for now
}
