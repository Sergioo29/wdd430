import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model'; // Adjust path if needed

@Component({
  selector: 'app-document-edit',
  standalone: true,
  imports: [FormsModule, CommonModule], // Import FormsModule to use ngForm and ngModel
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent {
  originalDocument: Document | null = null; // Initialize to avoid TypeScript errors
  document: Document = { 
    id: '', 
    name: '', 
    url: '', 
    description: '' // Added missing property
  };

  onCancel(): void {
    console.log("Document edit canceled");
  }

  onSubmit(form: any): void {
    console.log("Submitted form data:", form.value);
  }
}
