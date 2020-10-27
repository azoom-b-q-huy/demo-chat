import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'az-room-list',
})
export class RoomList {

  @Prop() name: string;

  render() {
    return (
      <div>Room List</div>
    );
  }
}