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
      <div id="az-chat" class="az-chat" style={{ visibility: state.visible ? 'visible' : 'hidden' }}>
        <az-room-chat></az-room-chat>
      </div>
    );
  }
}
