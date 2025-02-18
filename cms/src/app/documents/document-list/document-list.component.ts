import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item.component';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {  // ✅ Implement OnInit
  documents: Document[] = []; // ✅ Remove dummy data, initialize empty array

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  constructor(private documentService: DocumentService) {} // ✅ Inject DocumentService

  ngOnInit() {
    this.documents = this.documentService.getDocuments(); // ✅ Fetch documents from service
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
