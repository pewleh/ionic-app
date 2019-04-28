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

  ngOnInit() {
  //   // pulling our id from the url parameters for the character we need to make a request for
    let id = this.activatedRoute.snapshot.paramMap.get('id');
  //   //callin api with id, replacing info null with response
    this.homeService.getDetails(id)
      .subscribe(res => {
        const details = {
          ...res
        }
        this.homeService.getAll(res.films).subscribe(res => details.films = res);
        // this.homeService.getAll(res.species).subscribe(res => details.species = res);
        this.homeService.getAll(res.vehicles).subscribe(res => details.vehicles = res);
        // this.homeService.getAll(res.starships).subscribe(res => details.starships = res);
        // this.homeService.getAll([res.homeworld]).subscribe(res => details.homeworld = res);
        // console.log(details)
        this.information = details
      });
  }
}
