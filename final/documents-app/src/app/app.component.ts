// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document-service';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HttpClientModule],  // Add HttpClientModule to the imports array
})
export class AppComponent implements OnInit {

  documents: any[] = [];

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe((data: any[]) => {
      console.log(data);  // Log the response to verify data
      this.documents = data;
    });
  }
}
