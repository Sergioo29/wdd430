import { Injectable, EventEmitter } from '@angular/core'; 
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>(); // ✅ Used for selection
  documentListChanged = new Subject<Document[]>(); // ✅ Used for list updates

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice(); // ✅ Return a copy to prevent direct modification
  }

  getDocument(id: string): Document | null {
    return this.documents.find(doc => doc.id === id) || null;
  }

  deleteDocument(id: string) {
    this.documents = this.documents.filter(doc => doc.id !== id);
    this.documentListChanged.next([...this.documents]); // ✅ Notify document-list
  }
}
