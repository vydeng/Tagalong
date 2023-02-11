import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicFeedComponent } from './academic-feed.component';

describe('AcademicFeedComponent', () => {
  let component: AcademicFeedComponent;
  let fixture: ComponentFixture<AcademicFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
