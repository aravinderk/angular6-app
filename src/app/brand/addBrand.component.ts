import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-brand',
  templateUrl: './addBrand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class AddBrandComponent implements OnInit {
  brandDetailsObj: object;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.brandDetailsObj.subscribe(obj => {
      this.brandDetailsObj = obj;
    });
  }

  addBrandAttribute() {
    this.brandDetailsObj.brandAttributes.contentType.push({emailInfo: {from: {}, options: {}, replyTo: {}}});
  }

  deleteBrandAttribute(index) {
    this.brandDetailsObj.brandAttributes.contentType.splice(index, 1);
  }

  resetBrandForm(type) {
    const obj = this.data.getInitialBrandObj(type);
    this.data.setBrandDetails(obj);
  }

  addOrUpdateBrand() {
    if (this.brandDetailsObj.brandType === 'EXISTING') {
      this.data.updateBrand(this.brandDetailsObj).subscribe(
        data => {}
      );
    } else {
      this.data.addBrand(this.brandDetailsObj).subscribe(
        data => {
          this.resetBrandForm('NEW');
        }
      );
    }
  }
}
