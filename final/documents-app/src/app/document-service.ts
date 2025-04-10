// src/app/document-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = 'http://localhost:3000/'; // Your Node.js API

  constructor(private http: HttpClient) {}

  // Get all documents
  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Delete a document by ID
  deleteDocument(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Add a new document
  addDocument(document: any): Observable<any> {
    return this.http.post(this.apiUrl, document);
  }
}
