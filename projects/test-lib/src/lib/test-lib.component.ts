import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <h1>V2!!</h1>
    <p>
      test-lib works!!!
    </p>
  `,
  styles: []
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
