// src/app/document.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Correct import of HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
