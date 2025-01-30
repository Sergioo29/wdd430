import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-item',
  standalone: true,
  imports: [CommonModule],
  template: `<div>{{ document?.title }}</div>`,
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent {
  @Input() document: any; // Accepts document data
}
