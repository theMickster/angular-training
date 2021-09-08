import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {
  @Input() showBodyFat: boolean;
  @Output() create = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createEntry(){
    this.create.emit({id: -1, date: new Date('01-15-2021'), weight: 125, bodyfat: 0.35});
  }
}
