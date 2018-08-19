import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import {CONSTANT} from '../constants';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './deleteBrand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class DeleteBrandComponent implements OnInit {
    @Input() show: boolean;
    @Input() deleteBrandCallback: Function;
    @Input() brandId: string;
    constructor(private data: DataService, private router: Router) { }
    ngOnInit() { }

    deleteBrand(brandId) {
        this.data.deleteBrand(brandId).subscribe(
            data => {
                this.data.setNotification({type: 'success', text: CONSTANT.messages.deleteBrandSuccess});
                this.deleteBrandCallback(true);
            },
            err => {
                this.data.setNotification({type: 'error', text: CONSTANT.messages.deleteBrandError});
            }
        );
    }
}
