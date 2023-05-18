import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
  <h2>Class Binding cho 1 thuộc tính</h2>
  <div [class.active] = "isActive">
    Hiển thị nè
  </div>
  <h2>Class Binding cho nhiều thuộc tính</h2>
  <div [ngClass] = "{'active': isActive, 'active2': isActive2, 'active3': isActive3}">
    Hiển thị nè
  </div>
  <h2>Style Binding cho 1 thuộc tính</h2>
  <div [style.color] = "isActive ? 'red' : 'blue'">
    Hiển thị nè
  </div>
  <h2>Style Binding cho nhiều thuộc tính</h2>
  <div [ngStyle] = "{'color' : isActive ? 'red' : 'blue', 'background-color' : isActive2 ? 'red' : 'blue', 'font-weight' : isActive3 ? 'bold' : 'nomal'}">
    Hiển thị nè
  </div>
    `
})
export class BindingComponent {
  isActive = true;
  isActive2 = false;
  isActive3 = true;
}
