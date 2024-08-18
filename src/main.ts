import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello World!</h1>
    <a href="http://adserasinghe.github.io">adserasinghe</a>
  `,
  styles:`
  :host {
    color: #a144eb;
  }`,
})
export class PlaygroundComponent {}

bootstrapApplication(PlaygroundComponent);
