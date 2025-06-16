import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSettings } from './main-settings';

describe('MainSettings', () => {
  let component: MainSettings;
  let fixture: ComponentFixture<MainSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
