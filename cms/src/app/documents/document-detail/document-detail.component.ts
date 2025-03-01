import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { Document } from '../document.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-document-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Add RouterModule here
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document | null = null; // ✅ Allow null initially

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // ✅ Get ID from route
      if (id) {
        this.document = this.documentService.getDocument(id) || null; // ✅ Handle missing document
      }
    });
  }

  deleteDocument() {
    if (!this.document) return;
  
    this.documentService.deleteDocument(this.document.id); // ✅ Remove document
    this.router.navigate(['/documents']); // ✅ Navigate back to the list
  }
}
