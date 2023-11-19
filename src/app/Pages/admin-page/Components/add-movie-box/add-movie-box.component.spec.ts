import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieBoxComponent } from './add-movie-box.component';

describe('AddMovieBoxComponent', () => {
  let component: AddMovieBoxComponent;
  let fixture: ComponentFixture<AddMovieBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
