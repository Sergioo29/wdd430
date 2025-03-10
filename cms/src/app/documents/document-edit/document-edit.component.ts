import { Component } from '@angular/core';

@Component({
  selector: 'app-document-edit',
  standalone: true,
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent {
  
  onCancel(): void {
    // Logic to handle cancel action (e.g., navigate back or reset form)
    console.log("Document edit canceled");
  }
}
