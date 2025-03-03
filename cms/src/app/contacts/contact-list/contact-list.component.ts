import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  private contactListChangedSub!: Subscription; // ✅ Holds the subscription

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    // ✅ Subscribe to contact list changes
    this.contactListChangedSub = this.contactService.contactListChangedEvent.subscribe(
      (updatedContacts: Contact[]) => {
        this.contacts = updatedContacts;
      }
    );
  }

  ngOnDestroy() {
    this.contactListChangedSub.unsubscribe(); // ✅ Prevent memory leaks
  }
}
