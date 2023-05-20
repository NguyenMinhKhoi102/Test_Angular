import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() fontSize = 0;

  constructor() { }

  increaseFontSize() {
    this.fontSize += 5;
  }
  decreaseFontSize() {
    this.fontSize -= 5;
  }

  ngOnInit(): void {
  }

}
