import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceDayComponent } from './presence-day.component';

describe('PresenceDayComponent', () => {
  let component: PresenceDayComponent;
  let fixture: ComponentFixture<PresenceDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
