import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brandDetails.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandDetailsComponent implements OnInit {
  details$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getDetails().subscribe(
      data => this.details$ = data
    );
  }

}
