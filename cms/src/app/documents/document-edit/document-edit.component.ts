import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-document-edit',
  standalone: true,
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css'],
  imports: [CommonModule, FormsModule, RouterModule] // Import required modules
})
export class DocumentEditComponent implements OnInit {
  originalDocument!: Document;
  document!: Document;
  editMode: boolean = false;
  id!: string;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
  
      if (!this.id) {
        // If no ID, it's a new document → Initialize an empty document object
        this.editMode = false;
        this.document = new Document('', '', '', '');
        return;
      }
  
      const fetchedDocument = this.documentService.getDocument(this.id);
      if (!fetchedDocument) {
        return;
      }
  
      this.originalDocument = fetchedDocument;
      this.editMode = true;
      this.document = JSON.parse(JSON.stringify(this.originalDocument));
    });
  }
  
  

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return; // Prevent submission if the form is invalid
    }
  
    const value = form.value; // Get values from form fields
    const newDocument = new Document(
      this.id,
      value.name,
      value.description,
      value.url
    );
    console.log('Saving Document:', newDocument);

  
    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }
  
    this.router.navigate(['/documents']);
    console.log('the after thing Saving Document:', newDocument);

  }
  

  onCancel() {
    this.router.navigate(['/documents']);
  }
}
