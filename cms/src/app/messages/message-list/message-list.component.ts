import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { MessageEditComponent } from '../message-edit/message-edit.component'; // Import MessageEdit
import { MessageItemComponent } from '../message-item/message-item.component'; // Import MessageItem

@Component({
  selector: 'app-message-list',
  standalone: true,
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  imports: [MessageEditComponent, MessageItemComponent], // ✅ Add these imports
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }
}
