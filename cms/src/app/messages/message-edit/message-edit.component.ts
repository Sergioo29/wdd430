import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  standalone: true,
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  @Output() addMessageEvent = new EventEmitter<Message>();

  @ViewChild('subject', { static: false }) subjectInput!: ElementRef;
  @ViewChild('msgText', { static: false }) msgTextInput!: ElementRef;

  currentSender: string = '1'; // Hardcoded sender ID for now (change this as needed)

  onSendMessage() {
    const subject = this.subjectInput.nativeElement.value;
    const msgText = this.msgTextInput.nativeElement.value;

    if (!subject || !msgText) return;

    const newMessage = new Message(
      Math.random().toString(), // Generate a random ID
      this.currentSender,
      subject,
      msgText
    );

    this.addMessageEvent.emit(newMessage);
    this.onClear();
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
