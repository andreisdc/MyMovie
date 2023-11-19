// movies-box.component.ts

import { Component, OnInit } from '@angular/core';
import { TypeMovie } from 'src/app/Services/enums';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-movies-box',
  templateUrl: './movies-box.component.html',
  styleUrls: ['./movies-box.component.scss'],
})
export class MoviesBoxComponent implements OnInit {

  movies: any[] | undefined;
  id: number = 0;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  getCount(): number {
    return this.movies ? this.movies.length : 0;
  }

  moveMovies(arg0: string) {
  }

  getReversedMovies(): any[] {
    return this.movies ? this.movies.slice().reverse() : [];
  }

  getComedyMovies(): any[] {
    return this.movies ? this.movies.filter(movie => movie.type === TypeMovie.Comedy) : [];
  }

  getActionMovies(): any[] {
    return this.movies ? this.movies.filter(movie => movie.type === TypeMovie.Action) : [];
  }

  
  getAnimeMovies(): any[] {
    return this.movies ? this.movies.filter(movie => movie.type === TypeMovie.Anime) : [];
  }

  getImagePath(movieId: number): string {

    if (movieId)
    {
      const imageName = `Image/${movieId}.png`;
      const imagePath = `../../../../../assets/${imageName}`;
      console.log(imagePath);
      return imagePath;
    }

    return '';

  }
}
