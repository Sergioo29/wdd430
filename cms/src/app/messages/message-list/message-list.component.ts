import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { MessageEditComponent } from '../message-edit/message-edit.component'; // Import MessageEdit
import { MessageItemComponent } from '../message-item/message-item.component'; // Import MessageItem
import { JsonPipe } from '@angular/common';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MessageEditComponent, MessageItemComponent, JsonPipe, NgFor],
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    
    this.messageService.messageChangedEvent.subscribe((messages: Message[]) => {
      this.messages = messages;
    });

    console.log('Messages in MessageListComponent:', this.messages); // ✅ Debugging log

  }
}
