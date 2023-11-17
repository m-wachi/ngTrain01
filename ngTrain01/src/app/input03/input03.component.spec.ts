import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input03Component } from './input03.component';

describe('Input03Component', () => {
  let component: Input03Component;
  let fixture: ComponentFixture<Input03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Input03Component]
    });
    fixture = TestBed.createComponent(Input03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
