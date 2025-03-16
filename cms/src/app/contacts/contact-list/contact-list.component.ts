import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule for ngModel
import { Contact } from '../contact.model';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';
import { ContactsFilterPipe } from '../contacts-filter.pipe'; // ✅ Import the standalone pipe

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ContactItemComponent, ContactsFilterPipe], // ✅ Add FormsModule & Pipe
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  searchTerm: string = ''; // ✅ Add searchTerm property
  private contactListChangedSub!: Subscription; // Holds the subscription

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    // Subscribe to contact list changes
    this.contactListChangedSub = this.contactService.contactListChanged.subscribe(
      (updatedContacts) => {
        this.contacts = updatedContacts;
      }
    );
  }

  ngOnDestroy() {
    this.contactListChangedSub.unsubscribe(); // Prevent memory leaks
  }
}
