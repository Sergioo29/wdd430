import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item.component';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, RouterModule, DocumentItemComponent],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  private documentListChangedSub!: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documentService.fetchDocuments(); // ✅ Fetch from Firebase on load

    this.documentListChangedSub = this.documentService.documentListChanged.subscribe(
      (updatedDocuments: Document[]) => {
        this.documents = updatedDocuments;
      }
    );
  }

  ngOnDestroy() {
    this.documentListChangedSub.unsubscribe();
  }
}
