import { Component, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  standalone: true,
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  @ViewChild('subject', { static: false }) subjectInput!: ElementRef;
  @ViewChild('msgText', { static: false }) msgTextInput!: ElementRef;

  currentSender: string = '1'; // Example sender ID

  constructor(private messageService: MessageService) {}

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

    this.messageService.addMessage(newMessage); // Call the MessageService method
    this.onClear();
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
