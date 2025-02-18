import { Component, Output, OnInit } from '@angular/core';
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
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onSelectedDocument(document: Document) {
    this.documentService.documentSelectedEvent.emit(document); // ✅ Emit event from service
  }
}
