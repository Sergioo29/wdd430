import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from './document.model'; // Adjusted path
import { DocumentListComponent } from './document-list/document-list.component'; // Adjusted path
import { DocumentDetailComponent } from './document-detail/document-detail.component'; // Adjusted path

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, DocumentListComponent, DocumentDetailComponent],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  selectedDocument!: Document;

  onDocumentSelected(document: Document) {
    this.selectedDocument = document;
  }
}
