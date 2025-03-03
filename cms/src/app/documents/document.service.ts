import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>(); // ✅ Used for selection
  documentListChanged = new Subject<Document[]>(); // ✅ Used for list updates
  maxDocumentId: number; // ✅ Stores the highest document ID

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId(); // ✅ Initialize maxDocumentId
  }

  getDocuments(): Document[] {
    return this.documents.slice(); // ✅ Return a copy to prevent direct modification
  }

  getDocument(id: string): Document | null {
    return this.documents.find((doc) => doc.id === id) || null;
  }

  // ✅ Function to get the max document ID
  getMaxId(): number {
    let maxId = 0;

    for (let document of this.documents) {
      let currentId = parseInt(document.id, 10); // Convert ID to number
      if (currentId > maxId) {
        maxId = currentId;
      }
    }

    return maxId;
  }

  // ✅ Function to add a new document
  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++; // Increment max ID
    newDocument.id = this.maxDocumentId.toString(); // Assign new unique ID
    this.documents.push(newDocument); // Add to list

    this.documentListChanged.next(this.documents.slice()); // Notify subscribers
  }

  // ✅ Function to update an existing document
  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return; // If original document is not found, exit
    }

    newDocument.id = originalDocument.id; // Keep the same ID
    this.documents[pos] = newDocument; // Replace old document

    this.documentListChanged.next(this.documents.slice()); // Notify subscribers
  }

  deleteDocument(id: string) {
    this.documents = this.documents.filter((doc) => doc.id !== id);
    this.documentListChanged.next([...this.documents]); // ✅ Notify document-list
  }
}
