import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    console.log('called')
    this.data.getDetails().subscribe(
      data => this.details$ = data 
    );
  }

}
