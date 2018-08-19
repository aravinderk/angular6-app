import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import {CONSTANT} from '../constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brandDetails.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandDetailsComponent implements OnInit {
  brandDetails: any = null;
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
        this.brandDetails = data;
        this.brandDetails.brandType = 'EXISTING';
        this.showNoResultsMsg = data ? false : true;
        this.data.setBrandDetails(this.brandDetails);
      },
      err => {
        this.data.setNotification({type: 'error', text: CONSTANT.messages.brandError})
      }
    );
  }

  redirectToAddBrand() {
    this.data.setBrandDetails({
      brandId: '',
      brandName: '',
      status: '',
      brandType: '',
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

  deleteBrandCallback(isDeleted) {
    this.showDeletePopup = false;
    if (isDeleted) {
      this.brandDetails = null;
      this.brandIdSearchStr = '';
    }
  }
}
