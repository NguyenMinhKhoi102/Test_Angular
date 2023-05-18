import { Component } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <button (click)="add()">+</button>
    <button (click)="abstract()">-</button>
    <ng-template [ngIf]="user.age >= 13" [ngIfElse]="noPG13">
      <div>Bạn có thể xem nội dung PG-13</div>
    </ng-template>
    <ng-template #noPG13>
      <div>Bạn không thể xem nội dung PG-13</div>
    </ng-template>
  `,
})
export class HelloComponent {
  user = {
    name: 'Tiep Phan',
    age: 13,
  };
  add() {
    this.user.age++;
  }
  abstract() {
    this.user.age--;
  }
}
