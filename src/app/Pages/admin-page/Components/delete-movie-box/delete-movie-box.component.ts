import { Component } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-delete-movie-box',
  templateUrl: './delete-movie-box.component.html',
  styleUrls: ['./delete-movie-box.component.scss']
})
export class DeleteMovieBoxComponent {

  movieId: number = 0;

  constructor(private movieService: MovieService) { }

  deleteData() {
    console.log("delete data");
  }

  deleteDataById() {
    this.movieService.deleteDataById(this.movieId);
  }
}
