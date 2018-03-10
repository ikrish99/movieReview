import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private movieData: any;
  private splitData: any = [];
  private analytics: boolean;
  private rating: boolean;

  constructor(private _movieService: MovieDataService) {
    this.rating = false;
    this.analytics = true;

    this._movieService.Database$.subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        if (new Date().getTime() - new Date(res[i].releaseDate).getTime() > 0) {
          res[i].ratingDisable = false;
        } else {
          res[i].ratingDisable = true;
        }
      }
      this.movieData = res;
    });
    for (var i = 0; i < this.movieData.length; i += 4) {
      this.splitData.push(this.movieData.slice(i, i + 4));
    }
  }

  ngOnInit() {

  }

  updateRating(id, rating, flag) {
    if (!flag) {
      this._movieService.setData(id, rating);
    }
  }

  toggle(tag) {
    if (tag == 'rating') {
      this.rating = false;
      this.analytics = true;
    } else {
      this.rating = true;
      this.analytics = false;
    }
    // this.analytics = !this.analytics;
  }

  sortByProperty(x, y, property) {

    return function (x, y) {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };

  };

  sort(tag) {
    if (tag == 'name') {
      this.movieData.sort(function(a, b){
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    } else {
      this.movieData.sort(function(a, b){return Date.parse(a.releaseDate) - Date.parse(b.releaseDate)});
    }
  }

}
