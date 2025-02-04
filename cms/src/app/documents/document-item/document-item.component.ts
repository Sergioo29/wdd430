import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model'; // Import the Document model

@Component({
  selector: 'app-document-item',
  standalone: true,
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent {
  @Input() document!: Document;
}