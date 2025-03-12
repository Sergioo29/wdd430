import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  contact: Contact = new Contact('', '', '', '', '', null);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private contactService = inject(ContactService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        const existingContact = this.contactService.getContact(id);
        if (existingContact) {
          this.contact = { ...existingContact }; // Create a copy of the object
        }
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/contacts']); // Navigate back to contacts list
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) return;

    if (this.contact.id) {
      this.contactService.updateContact(this.contact, { ...this.contact });
    } else {
      this.contactService.addContact(this.contact);
    }

    this.router.navigate(['/contacts']); // Navigate back to contacts list after saving
  }
}
