import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  @ViewChild('subject') subjectInput!: ElementRef;
  @ViewChild('msgText') msgTextInput!: ElementRef;
  
  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = "Sergio Henrique da Silva"; // Change this to your name

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
    this.subjectInput.nativeElement.value = "";
    this.msgTextInput.nativeElement.value = "";
  }
}
