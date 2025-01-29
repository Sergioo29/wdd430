import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentListComponent } from './document-list/document-list.component';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [CommonModule, DocumentDetailComponent, DocumentListComponent],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent { }
