import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { MessageEditComponent } from '../message-edit/message-edit.component';
import { MessageItemComponent } from '../message-item/message-item.component';
import { JsonPipe } from '@angular/common';
import { CommonModule, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MessageEditComponent, MessageItemComponent, JsonPipe, NgFor],
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  private messageListChangedSub!: Subscription; // ✅ Subscription for updates

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.fetchMessages(); // ✅ Fetch from Firebase

    this.messageListChangedSub = this.messageService.messageListChanged.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  ngOnDestroy() {
    this.messageListChangedSub.unsubscribe(); // ✅ Prevent memory leaks
  }
}
