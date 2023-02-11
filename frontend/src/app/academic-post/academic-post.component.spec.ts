import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPostComponent } from './academic-post.component';

describe('AcademicPostComponent', () => {
  let component: AcademicPostComponent;
  let fixture: ComponentFixture<AcademicPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
