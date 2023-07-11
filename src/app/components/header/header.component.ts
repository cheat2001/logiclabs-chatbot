import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  clearHistory(){
   if(confirm("Are you sure that you want to clear chat history?")){
    localStorage.removeItem("chatData");
    location.reload();
   }
  }
}
