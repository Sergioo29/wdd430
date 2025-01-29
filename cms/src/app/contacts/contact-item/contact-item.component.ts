import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model'; // Import Contact model

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
  @Input() contact!: Contact; // Input property to receive contact data
}
