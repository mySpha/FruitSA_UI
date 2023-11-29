import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDatailsComponent } from './category-datails.component';

describe('CategoryDatailsComponent', () => {
  let component: CategoryDatailsComponent;
  let fixture: ComponentFixture<CategoryDatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDatailsComponent]
    });
    fixture = TestBed.createComponent(CategoryDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
