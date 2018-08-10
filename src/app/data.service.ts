import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export const defaultBrandObj: Brand = {
  brandId: '',
  brandName: '',
  status: '',
  brandType: '',
  brandAttributes: {
    contentType: [{emailInfo: {from: {}, options: {}, replyTo: {}}}]
  },
  brandMatchingAttributes: {address: {}},
  additionalAttributes: {}
};

interface BrandAttributes {
  contentType: Array<object>;
}

export interface Brand {
  brandAttributes: BrandAttributes;
  brandMatchingAttributes: object;
  additionalAttributes: object;
  brandId: string;
  brandName: string;
  status: string;
  brandType: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // BRAND_URL = '../assets/data/getBrand.json';
  BRAND_URL = 'https://u9tticv9ta.execute-api.us-east-1.amazonaws.com/DEV/v1/ipmapi/brand';

  constructor(private http: HttpClient) { }
  private obj: Brand;
  private brandObj = new BehaviorSubject(this.obj);
  brandDetailsObj = this.brandObj.asObservable();

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
