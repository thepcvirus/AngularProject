import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioForm } from './bio-form';

describe('BioForm', () => {
  let component: BioForm;
  let fixture: ComponentFixture<BioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
