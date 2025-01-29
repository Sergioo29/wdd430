import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-header',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule if needed
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Fixed "styleUrls"
})
export class HeaderComponent {
  @Output() selectedFeatureEvent = new EventEmitter<string>(); // Moved inside the class

  onSelected(selectedEvent: string) {
    this.selectedFeatureEvent.emit(selectedEvent);  // Moved inside the class
  }
}
