import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsForm } from './tabs-form';

describe('TabsForm', () => {
  let component: TabsForm;
  let fixture: ComponentFixture<TabsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
