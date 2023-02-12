import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPostComponent } from './events-post.component';

describe('EventsPostComponent', () => {
  let component: EventsPostComponent;
  let fixture: ComponentFixture<EventsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
