import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/entry';
import { WeightEntriesService } from '../weight-entries.service';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBodyFat: boolean = true;
  entries: Entry[];

  constructor(public entriesSvc: WeightEntriesService) { }

  ngOnInit() {
    this.updateEntriesData();
  }

  toggleBodyFat(){
    this.showBodyFat = !this.showBodyFat;
  }

  updateEntriesData(){
    this.entriesSvc.getEntries().subscribe(x => {
      this.entries = x;
    }) 
  }

  createNewEntry(entry: Entry){
    this.entriesSvc.addEntry(entry).subscribe(() => {
      this.updateEntriesData();
    });
  }  
}
