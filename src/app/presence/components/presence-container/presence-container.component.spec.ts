import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceContainerComponent } from './presence-container.component';

describe('PresenceContainerComponent', () => {
  let component: PresenceContainerComponent;
  let fixture: ComponentFixture<PresenceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
