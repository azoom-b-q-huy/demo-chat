import { Component, Method, h } from '@stencil/core';

import state from '../store';

@Component({
  tag: 'az-chat',
  styleUrl: 'chat.scss',
  shadow: true,
})
export class AZoomChat {

  @Method()
  async toggle() {
    state.visible = !state.visible;
  }

  render() {
    return (
      <section id="az-chat" class="az-chat">
        {state.visible ? <az-room-chat></az-room-chat> : null}
      </section>
    );
  }
}
