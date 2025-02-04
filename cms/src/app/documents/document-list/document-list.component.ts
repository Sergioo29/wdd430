import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item.component';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  // Step 3: Dummy list of documents
  documents: Document[] = [
    new Document('1', 'Document 1', 'Description for Document 1', 'https://example.com/doc1'),
    new Document('2', 'Document 2', 'Description for Document 2', 'https://example.com/doc2'),
    new Document('3', 'Document 3', 'Description for Document 3', 'https://example.com/doc3'),
    new Document('4', 'Document 4', 'Description for Document 4', 'https://example.com/doc4'),
    new Document('5', 'Document 5', 'Description for Document 5', 'https://example.com/doc5')
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
