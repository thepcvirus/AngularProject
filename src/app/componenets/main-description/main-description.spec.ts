import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDescription } from './main-description';

describe('MainDescription', () => {
  let component: MainDescription;
  let fixture: ComponentFixture<MainDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
