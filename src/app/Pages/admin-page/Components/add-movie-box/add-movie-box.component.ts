import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeMovie } from 'src/app/Services/enums';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-add-movie-box',
  templateUrl: './add-movie-box.component.html',
  styleUrls: ['./add-movie-box.component.scss']
})
export class AddMovieBoxComponent {

  movieForm: FormGroup;
  movieTypes = Object.values(TypeMovie);

  seriesNames = [
    "Stranger Things",
    "Breaking Bad",
    "The Mandalorian",
    "Game of Thrones",
    "The Witcher",
    "Friends",
    "Lucifer",
    "The 100",
    "Black Mirror",
    "Money Heist"
  ];

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      imageNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    this.movieForm.markAllAsTouched();

    if (this.movieForm.valid) {
      const newMovie = {
        id: this.movieService.getMoviesLength() + 1,
        name: this.movieForm.get('name')?.value,
        type: this.movieForm.get('type')?.value,
        imageNumber: this.movieService.getMoviesLength(),
      };

      this.movieService.addMovie(newMovie);
    }
  }

}
