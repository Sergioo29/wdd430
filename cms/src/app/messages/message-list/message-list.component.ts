import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { MessageItemComponent } from '../message-item/message-item.component';
import { MessageEditComponent } from '../message-edit/message-edit.component';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, MessageItemComponent, MessageEditComponent],
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Alice', 'Hello', 'How are you?'),
    new Message('2', 'Bob', 'Meeting', 'Let’s meet at 3 PM.'),
    new Message('3', 'Charlie', 'Greetings', 'Have a great day!'),
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
