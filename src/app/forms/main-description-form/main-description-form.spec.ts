import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDescriptionForm } from './main-description-form';

describe('MainDescriptionForm', () => {
  let component: MainDescriptionForm;
  let fixture: ComponentFixture<MainDescriptionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDescriptionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDescriptionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
