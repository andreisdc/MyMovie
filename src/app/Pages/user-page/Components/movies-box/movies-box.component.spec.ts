import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeMovie } from 'src/app/Services/enums';

import { MoviesBoxComponent } from './movies-box.component';

describe('MoviesBoxComponent', () => {
  let component: MoviesBoxComponent;
  let fixture: ComponentFixture<MoviesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
