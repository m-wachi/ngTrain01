import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input01Component } from './input01.component';

describe('Input01Component', () => {
  let component: Input01Component;
  let fixture: ComponentFixture<Input01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Input01Component]
    });
    fixture = TestBed.createComponent(Input01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
