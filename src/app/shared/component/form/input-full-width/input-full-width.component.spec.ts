import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFullWidthComponent } from './input-full-width.component';

describe('InputFullWidthComponent', () => {
  let component: InputFullWidthComponent;
  let fixture: ComponentFixture<InputFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFullWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
