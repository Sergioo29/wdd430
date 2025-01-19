import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'; 
import { ContactsComponent } from './contacts/contacts.component'; 

@Component({
  selector: 'cms-root',
  standalone: true,
  imports: [HeaderComponent, ContactsComponent], // This should now work correctly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms';
}
