import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieBoxComponent } from './delete-movie-box.component';

describe('DeleteMovieBoxComponent', () => {
  let component: DeleteMovieBoxComponent;
  let fixture: ComponentFixture<DeleteMovieBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMovieBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
