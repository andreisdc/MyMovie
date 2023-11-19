import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBoxComponent } from './signup-box.component';

describe('SignupBoxComponent', () => {
  let component: SignupBoxComponent;
  let fixture: ComponentFixture<SignupBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
