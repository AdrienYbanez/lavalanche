import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceRowComponent } from './presence-row.component';

describe('PresenceRowComponent', () => {
  let component: PresenceRowComponent;
  let fixture: ComponentFixture<PresenceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
