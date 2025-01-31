import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model'; // Ensure correct import path

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @Input() message!: Message; // Input variable for receiving message data
}
