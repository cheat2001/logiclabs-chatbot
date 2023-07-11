import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  message:string="";
  isLoading: boolean = false;

  constructor(private chatService: ChatService){}

  sendMessage(){
    this.chatService.addMessage(this.message,true);
    this.isLoading=true;

    this.chatService.getBotResponse(this.message).subscribe(res=>{
      this.chatService.addMessage(res.ChatGPT,false);
      this.isLoading = false;
      console.log(res.ChatGPT);
      this.message="";
      location.reload();
    },
    error=>{
      this.isLoading=false;
    }
    )
  }

}
