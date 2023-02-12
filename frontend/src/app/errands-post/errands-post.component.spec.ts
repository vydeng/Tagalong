import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandsPostComponent } from './errands-post.component';

describe('ErrandsPostComponent', () => {
  let component: ErrandsPostComponent;
  let fixture: ComponentFixture<ErrandsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrandsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrandsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
