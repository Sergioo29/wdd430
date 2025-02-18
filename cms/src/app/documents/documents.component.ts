import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';
import { Document } from './document.model';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list/document-list.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, DocumentListComponent],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument!: Document;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    // ✅ Subscribe to the documentSelectedEvent in the DocumentService
    this.documentService.documentSelectedEvent.subscribe(
      (document: Document) => {
        this.selectedDocument = document; // ✅ Assign the selected document
      }
    );
  }
}
