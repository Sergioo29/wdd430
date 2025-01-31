import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild('subject') subjectInputRef!: ElementRef;
  @ViewChild('msgText') msgTextInputRef!: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = 'Sergio Henrique da Silva'; // Your name

  onSendMessage() {
    const subjectValue = this.subjectInputRef.nativeElement.value;
    const msgTextValue = this.msgTextInputRef.nativeElement.value;

    if (!subjectValue || !msgTextValue) {
      return; // Prevent sending empty messages
    }

    const newMessage = new Message('1', this.currentSender, subjectValue, msgTextValue);
    this.addMessageEvent.emit(newMessage);

    this.onClear(); // Clear the form after sending
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }
}
