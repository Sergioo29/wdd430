import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];
  messageChangedEvent = new EventEmitter<Message[]>(); // New EventEmitter

  constructor() {
    this.messages = MOCKMESSAGES; // Initialize with mock messages
  }

  getMessages(): Message[] {
    console.log('Mock Messages:', this.messages);
    return this.messages.slice(); // Return a copy
  }

  getMessage(id: string): Message | undefined {
    return this.messages.find((message) => message.id === id);
  }

  addMessage(message: Message) {
    this.messages.push(message); // Add new message
    this.messageChangedEvent.emit(this.messages.slice()); // Emit updated list
  }
}
