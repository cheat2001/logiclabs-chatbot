import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
  private apiKey = '27dd92e7d9msh7fce29b9b8cfd30p1f190djsnd4fea590718d';
  chat:any[]=[];
  private localStorageKey = 'chatData';

 
  constructor(private http: HttpClient) {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
       this.chat=JSON.parse(storedData);
    }
  }

  getChat(): any[] {
    return this.chat;
  }
  private updateChat(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.chat));
  }

  addMessage(message: string, isUser: boolean): void {
    this.chat=[...this.chat,{message,isUser}]
    this.updateChat();
  }

  getBotResponse(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
    });

    const body = {
      messages: [
        {
          role: 'user',
          content: message
        }
      ]
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

}
