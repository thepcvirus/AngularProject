import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiForm } from './ai-form';

describe('AiForm', () => {
  let component: AiForm;
  let fixture: ComponentFixture<AiForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
