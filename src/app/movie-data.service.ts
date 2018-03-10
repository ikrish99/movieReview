import { Injectable } from '@angular/core';
import { database } from './movies.data';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class MovieDataService {

  private database: any;
  public Database$: BehaviorSubject<any>;

  constructor() {
    this.Database$ = new BehaviorSubject<any>(database);
    this.database = database;
  }

  getData() {
    this.Database$.next(database);
  }

  setData(id, rating){
    this.database[id - 1].rating = rating;
    this.getData();
  }

}
