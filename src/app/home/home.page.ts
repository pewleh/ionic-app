import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any>;

  constructor(private homeService: HomeService) { }

    /* this is similar to component did mount method from react
     this runs on initialisation of the component */
  ngOnInit() {
    /* so setting this.result directly here was retuning the unresolved Observable.
     used subscribe method to get around this issue to ensure it had resolved, works
     similar to the 'then' block of a promise */
    this.homeService.getData().subscribe(res => this.results = res)
  }
}
