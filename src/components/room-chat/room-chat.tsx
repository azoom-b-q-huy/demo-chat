import { Component, State, h } from '@stencil/core';

import state from '../../store';

type Message = {
  id: number;
  content: string;
  sender: string;
};

@Component({
  tag: 'az-room-chat',
  styleUrl: 'room-chat.scss',
})
export class RoomChat {
  textInput!: HTMLInputElement;
  scrollView!: HTMLDivElement;
  user: 'b.q.huy@azoom.jp';
  @State() listMessages: Array<Message> = state.messages;

  @State() message: string;

  _handlerKeyDown = e => {
    switch (e.key) {
      case 'Enter':
        this.listMessages = [
          ...this.listMessages,
          {
            id: Date.now(),
            content: this.textInput.value,
            sender: this.user,
          },
        ];
        this.textInput.value = '';
        this._scrollBottom();
        break;

      default:
        break;
    }
  };
  _scrollBottom() {
    this.scrollView.scrollTo({
      left: 0,
      top: this.scrollView.scrollHeight,
      behavior: 'smooth',
    });
  }
  componentDidRender() {
    this._scrollBottom();
  }
  render() {
    return (
      <div class="room-chat">
        <div class="room-header">
          <div class="title">Bùi Quang Huy ▾</div>
          <div class="icon">✕</div>
        </div>
        <div class="room-body" ref={el => (this.scrollView = el as HTMLDivElement)}>
          {this.listMessages.map(message => {
            return (
              <div class={message.id % 2 === 0 ? 'message -right' : 'message -left'} key={message.id}>
                {message.content}
              </div>
            );
          })}
        </div>
        <div class="room-footer">
          <input class="input" type="text" ref={el => (this.textInput = el as HTMLInputElement)} onKeyDown={this._handlerKeyDown} value={this.message} />
          <div class="icon">⌲</div>
        </div>
      </div>
    );
  }
}
