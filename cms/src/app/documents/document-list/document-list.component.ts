import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentItemComponent } from '../document-item/document-item.component'; // Ensure correct path

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent], // Ensure app-document-item is imported here
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  documents = [
    { id: 1, title: 'Document 1', content: 'Lorem ipsum' },
    { id: 2, title: 'Document 2', content: 'Dolor sit amet' }
  ]; // Mock data to prevent errors
}


