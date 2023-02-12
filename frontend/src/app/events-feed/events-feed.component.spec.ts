import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFeedComponent } from './events-feed.component';

describe('EventsFeedComponent', () => {
  let component: EventsFeedComponent;
  let fixture: ComponentFixture<EventsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
