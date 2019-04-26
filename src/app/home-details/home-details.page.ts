import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.page.html',
  styleUrls: ['./home-details.page.scss'],
})
export class HomeDetailsPage implements OnInit {

  information = null;

  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param homeService The home Service to get data
   */
  constructor(private activatedRoute: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {}

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}
