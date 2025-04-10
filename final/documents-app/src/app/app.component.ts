// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { DocumentService } from './document-service'; // Import your DocumentService
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule], // Add HttpClientModule to the imports array
})
export class AppComponent implements OnInit {
  documents: any[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.fetchDocuments();
  }

  // Fetch the documents from the backend
  fetchDocuments(): void {
    this.documentService.getDocuments().subscribe((data: any[]) => {
      console.log(data); // Log the response to verify data
      this.documents = data;
    });
  }

  // Method to delete a document
  deleteDocument(id: string): void {
    this.documentService.deleteDocument(id).subscribe(() => {
      console.log('Document deleted');
      this.fetchDocuments(); // Re-fetch the documents after deletion
    });
  }

  // Method to add a document
  addDocument(): void {
    const newDocument = {
      title: 'New Document',
      content: 'This is a new document.',
    };
    this.documentService.addDocument(newDocument).subscribe(() => {
      console.log('Document added');
      this.fetchDocuments(); // Re-fetch the documents after adding
    });
  }

  // Method to edit a document (you can add more functionality as needed)
  editDocument(document: any): void {
    console.log('Editing document:', document);
    // Implement your edit logic here, for example, open a modal with form
  }
}
