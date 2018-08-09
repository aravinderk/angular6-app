import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  showDeletePopup;
  deleteBrandCallbackFn: Function;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.deleteBrandCallbackFn = this.deleteBrandCallback.bind(this);
  }

  getBrandDertails(brandId) {
    this.data.getBrandDetails(brandId).subscribe(
      data => {
        data.brandType = 'EXISTING';
        this.brandDetails = data;
        this.showNoResultsMsg = data ? false : true;
        this.data.setBrandDetails(this.brandDetails);
      }
    );
  }

  redirectToAddBrand() {
    this.data.setBrandDetails({
      brandAttributes: {
        contentType: [{emailInfo: {from: {}, options: {}, replyTo: {}}}]
      },
      brandMatchingAttributes: {address: {}},
      additionalAttributes: {}
    });
    this.router.navigate(['./add-brand']);
  }

  deleteBrand(brandId) {
    this.showDeletePopup = true;
  }

  deleteBrandCallback() {
    this.showDeletePopup = false;
    this.brandDetails = null;
    this.brandIdSearchStr = '';
  }

}
