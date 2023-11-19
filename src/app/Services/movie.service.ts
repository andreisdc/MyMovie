import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMoviesLength() {
    return this.movies.length;
  }
  private movies: any[] = [];

  constructor() {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      this.movies = JSON.parse(savedMovies);
    } else {
      localStorage.setItem('movies', JSON.stringify(this.movies));
    }
  }

  addMovie(movieData: any) {
    this.movies.push(movieData);
    this.saveMoviesToLocalStorage();
  }

  getMovies() {
    return this.movies.slice();
  }

  deleteData()
  {
    localStorage.removeItem('movies');
    this.movies = [];
  }

  deleteDataById(id: number)
  {
    this.movies.splice(id, 1);
    this.saveMoviesToLocalStorage();
  }

  private saveMoviesToLocalStorage() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
