import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandsFeedComponent } from './errands-feed.component';

describe('ErrandsFeedComponent', () => {
  let component: ErrandsFeedComponent;
  let fixture: ComponentFixture<ErrandsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrandsFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrandsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
