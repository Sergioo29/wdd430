import { Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      { path: 'new', component: DocumentEditComponent }, // Create a new document
      { path: ':id', component: DocumentDetailComponent }, // View a document
      { path: ':id/edit', component: DocumentEditComponent } // Edit a document
    ]
  },
  { path: 'messages', component: MessageListComponent },
  { path: 'contacts', component: ContactsComponent }
];
