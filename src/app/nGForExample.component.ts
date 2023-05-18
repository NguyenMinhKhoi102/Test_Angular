import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  template: `
    <h2>Sử dụng ngFor cơ bản</h2>
    <div *ngFor="let author of authors">
      {{ author.id }} - {{ author.firstName }} {{ author.lastName }}
    </div>
    <h2>Sử dụng ngFor với một số thuộc tính local</h2>
    <div *ngFor="let author of authors; index as idx; count as total">
      ({{ idx }})/({{ total }}): {{ author.id }} - {{ author.firstName }}
      {{ author.lastName }}
    </div>
    <h2>Sử dụng ngFor trong ng-template</h2>
    <ng-template
      ngFor
      [ngForOf]="authors"
      let-author
      let-idx="index"
      let-total="count"
    >
      <div>
        ({{ idx }})/({{ total }}): {{ author.id }} - {{ author.firstName }}
        {{ author.lastName }}
      </div>
    </ng-template>
    <h2>Sử dụng cấu trúc lồng nhau</h2>
    <div *ngFor="let author of authors">
      <ng-container *ngIf="author.id > 0"> More code </ng-container>
    </div>
  `,
})
export class AuthorComponent {
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
}
