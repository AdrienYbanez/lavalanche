import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceMonthComponent } from './presence-month.component';

describe('PresenceMonthComponent', () => {
  let component: PresenceMonthComponent;
  let fixture: ComponentFixture<PresenceMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
