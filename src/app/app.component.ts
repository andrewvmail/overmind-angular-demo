import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '../overmind'


// import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',

    template: `
<div *track>
  <h1 (click)="actions.changeTitle()">{{ state.title }}</h1>
</div>
  `,


    changeDetection: ChangeDetectionStrategy.OnPush


  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  state = this.store.select()
  actions = this.store.actions
  constructor(private store: Store) {}
}
