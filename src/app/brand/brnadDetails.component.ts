import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brandDetails.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandDetailsComponent implements OnInit {
  brandDetails: Object = null;
  brandIdSearchStr;
  showNoResultsMsg = false;
  constructor(private data: DataService) { }

  ngOnInit() {}

  getBrandDertails() {
    this.data.getBrandDetails().subscribe(
      data => {
        this.brandDetails = data;
        this.showNoResultsMsg = data ? false : true;
      }
    );
  }

}
