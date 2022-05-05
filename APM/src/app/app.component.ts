import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <h1>{{pageTitle}}</h1>
  <div>hello world</div>
  `
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}