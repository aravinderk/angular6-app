import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

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
                this.deleteBrandCallback(true);
            }
        );
    }
}
