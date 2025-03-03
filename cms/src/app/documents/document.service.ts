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
  documentListChangedEvent = new Subject<Document[]>(); // ✅ Corrected name

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice(); // ✅ Return a copy to prevent direct modification
  }

  getDocument(id: string): Document | null {
    return this.documents.find((doc) => doc.id === id) || null;
  }

  addDocument(newDocument: Document) {
    this.documents.push(newDocument);
    this.documentListChangedEvent.next([...this.documents]); // ✅ Notify subscribers
  }

  updateDocument(index: number, updatedDocument: Document) {
    if (index >= 0 && index < this.documents.length) {
      this.documents[index] = updatedDocument;
      this.documentListChangedEvent.next([...this.documents]); // ✅ Notify subscribers
    }
  }

  deleteDocument(id: string) {
    this.documents = this.documents.filter((doc) => doc.id !== id);
    this.documentListChangedEvent.next([...this.documents]); // ✅ Notify subscribers
  }
}
