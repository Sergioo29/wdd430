import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Import HttpClient
import { Document } from './document.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private firebaseUrl = 'https://wdd430-angular-cms-3f260-default-rtdb.firebaseio.com/documents.json'; // ✅ Firebase URL

  documents: Document[] = [];
  documentListChanged = new Subject<Document[]>(); // ✅ Emits changes
  maxDocumentId: number = 0; // ✅ Initialize max ID

  constructor(private http: HttpClient) {} // ✅ Inject HttpClient

  // ✅ Fetch documents from Firebase
  fetchDocuments() {
    this.http.get<Document[]>(this.firebaseUrl).subscribe(
      (fetchedDocuments) => {
        this.documents = fetchedDocuments || []; // ✅ Handle null response
        this.maxDocumentId = this.getMaxId(); // ✅ Update max ID
        this.documentListChanged.next([...this.documents]); // ✅ Notify updates
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
  }

  getDocuments(): Document[] {
    return [...this.documents]; // ✅ Return a copy to prevent mutation
  }

  getDocument(id: string): Document | null {
    return this.documents.find((doc) => doc.id === id) || null;
  }

  private getMaxId(): number {
    let maxId = 0;
    for (let document of this.documents) {
      let currentId = parseInt(document.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) return;

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);

    this.storeDocuments(); // ✅ Save to Firebase
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) return;

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) return;

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;

    this.storeDocuments(); // ✅ Save to Firebase
  }

  deleteDocument(id: string) {
    this.documents = this.documents.filter((doc) => doc.id !== id);
    this.storeDocuments(); // ✅ Save to Firebase
  }

  // ✅ Store documents in Firebase
  private storeDocuments() {
    this.http.put(this.firebaseUrl, this.documents).subscribe(() => {
      this.documentListChanged.next([...this.documents]); // ✅ Notify updates
    });
  }
}
