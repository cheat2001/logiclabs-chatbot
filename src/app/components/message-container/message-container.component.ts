import { Component,OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
  
  chats:any=[]

  constructor(private chatService:ChatService){}

  ngOnInit(): void {
   this.chats=JSON.parse(localStorage.getItem("chatData")!);

   console.log(this.chats);
   
  }

  
}
