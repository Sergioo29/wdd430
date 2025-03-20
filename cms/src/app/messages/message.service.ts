import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];
  messageListChanged = new Subject<Message[]>(); // ✅ Notify updates

  private firebaseUrl = 'https://wdd430-angular-cms-3f260-default-rtdb.firebaseio.com/messages.json'; // ✅ Firebase URL

  constructor(private http: HttpClient) {}

  // ✅ Fetch messages from Firebase
  fetchMessages() {
    this.http.get<Message[]>(this.firebaseUrl).subscribe(
      (messages) => {
        this.messages = messages ? messages : []; // ✅ Ensure it's not null
        this.messageListChanged.next([...this.messages]); // ✅ Notify subscribers
      },
      (error) => console.error('Error fetching messages:', error)
    );
  }

  getMessages(): Message[] {
    return [...this.messages]; // ✅ Return a copy
  }

  getMessage(id: string): Message | undefined {
    return this.messages.find((message) => message.id === id);
  }

  addMessage(newMessage: Message) {
    this.messages.push(newMessage); // ✅ Add message locally
    this.messageListChanged.next([...this.messages]); // ✅ Notify updates

    // ✅ Optionally, update Firebase
    this.http.put(this.firebaseUrl, this.messages).subscribe();
  }
}
