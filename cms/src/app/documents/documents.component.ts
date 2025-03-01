import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, RouterModule, DocumentListComponent],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {}
