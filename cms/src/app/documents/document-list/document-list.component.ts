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
  private documentListChangedSub!: Subscription; // ✅ Holds the subscription

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();

    // ✅ Subscribe to document list changes
    this.documentListChangedSub = this.documentService.documentListChangedEvent.subscribe(
      (updatedDocuments: Document[]) => {
        this.documents = updatedDocuments;
      }
    );
  }

  ngOnDestroy() {
    this.documentListChangedSub.unsubscribe(); // ✅ Prevent memory leaks
  }
}
