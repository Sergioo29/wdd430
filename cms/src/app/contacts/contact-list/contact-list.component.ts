import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact.model';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ContactItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  searchTerm: string = '';
  private contactListChangedSub!: Subscription;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.contactListChanged.subscribe((updatedContacts) => {
      this.contacts = updatedContacts;
      this.applyFilter();
    });

    this.contactService.fetchContacts(); // ✅ Fetch contacts on load
  }

  applyFilter() {
    this.filteredContacts = this.searchTerm
      ? this.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      : [];
  }

  ngOnDestroy() {
    if (this.contactListChangedSub) {
      this.contactListChangedSub.unsubscribe();
    }
  }
}
