import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  BRAND_URL = '../assets/data/getBrand.json';

  constructor(private http: HttpClient) { }
  private brandObj = new BehaviorSubject(this.getInitialBrandObj('NEW'));
  brandDetailsObj = this.brandObj.asObservable();

  getInitialBrandObj(type) {
    return {
      brandAttributes: {
        contentType: [{emailInfo: {from: {}, options: {}, replyTo: {}}}]
      },
      brandMatchingAttributes: {address: {}},
      additionalAttributes: {},
      brandType: type
    };
  }

  setBrandDetails(brandObj) {
    this.brandObj.next(brandObj);
  }

  getBrandDetails(brandId) {
    return this.http.get(`${this.BRAND_URL}?${brandId}`);
  }

  deleteBrand(brandId) {
    return this.http.delete(`${this.BRAND_URL}/${brandId}`);
  }

  addBrand(brandObj) {
    return this.http.post(this.BRAND_URL, brandObj);
  }

  updateBrand(brandObj) {
    return this.http.put(`${this.BRAND_URL}/${brandObj.brandId}`, brandObj);
  }
}
