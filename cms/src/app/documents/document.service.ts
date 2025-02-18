import { Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS; // Assign the mock data to documents
  }

  getDocuments(): Document[] {
    return this.documents.slice(); // Return a copy of the documents array
  }

  getDocument(id: string): Document | null {
    for (let document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }
}
