import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessageListComponent } from './messages/message-list/message-list.component';

@Component({
  selector: 'cms-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ContactsComponent, DocumentsComponent, MessageListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: string = 'documents';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}
