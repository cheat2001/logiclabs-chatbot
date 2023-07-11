import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { MessageComponent } from './components/message/message.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageContainerComponent } from './components/message-container/message-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    MessageComponent,
    InputComponent,
    HeaderComponent,
    MessageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
