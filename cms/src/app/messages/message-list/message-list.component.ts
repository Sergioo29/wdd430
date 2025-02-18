import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { MessageItemComponent } from '../message-item/message-item.component';
import { MessageService } from '../message.service';
import { MessageEditComponent } from '../message-edit/message-edit.component';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, MessageItemComponent, MessageEditComponent],
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}
  
  onAddMessage(message: Message) {
    this.messages.push(message);
  }
  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }
}





