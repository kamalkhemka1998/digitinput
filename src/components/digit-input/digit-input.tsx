import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'digit-input-medium',
  styleUrls: ['./digit-input.scss'],
  scoped: true,
})
export class DigitalInput {
  @Listen('keydown')
  handleKeyPress(ev: KeyboardEvent) {
    let x = Number(ev.target['id']) + 1;
    if (ev.key != '') {
      document.getElementById(String(x)).focus();
      console.log(ev.key);
    }
    console.log(ev);
    if (ev.code == 'Backspace') {
      console.log('Yes');
    }
  }

  render() {
    return (
      <div>
        <div>
          <input id="1" type="text" onKeyDown={this.handleKeyPress} maxlength="1" />
          <input id="2" type="text" onKeyDown={this.handleKeyPress} maxlength="1" />
          <input id="3" type="text" onKeyDown={this.handleKeyPress} maxlength="1" />
          <input id="4" type="text" maxlength="1" />
        </div>
      </div>
    );
  }
}
