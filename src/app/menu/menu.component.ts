import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentUrl: string;
  notification: any;
  alertClazz: string;
  constructor(private router: Router, private data: DataService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
   }

  ngOnInit() {
    const service = this.data;
    service.notification.subscribe(obj => {
      this.notification = obj;
      if(this.notification && this.notification.type){
        switch(this.notification.type) {
          case 'success':
            this.alertClazz = 'alert-success';
            break;
          case 'error':
            this.alertClazz = 'alert-danger';
            break;
          case 'info':
            this.alertClazz = 'alert-info';
            break;
        }
        let timer = setTimeout(function(){
          service.setNotification({});
          clearTimeout(timer);
        }, 3000);
      }
    });
  
  }

}
