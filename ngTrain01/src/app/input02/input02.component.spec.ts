import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input02Component } from './input02.component';

describe('Input02Component', () => {
  let component: Input02Component;
  let fixture: ComponentFixture<Input02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Input02Component]
    });
    fixture = TestBed.createComponent(Input02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
