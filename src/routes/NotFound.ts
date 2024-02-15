import { Component } from '../core/heropy';

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */ `
      <h1>
        <span>404 ERROR<br></span>
        Page Not Found.
      </h1>
    `
  }
}