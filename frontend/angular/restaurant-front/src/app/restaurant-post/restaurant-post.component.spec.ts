import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPostComponent } from './restaurant-post.component';

describe('RestaurantPostComponent', () => {
  let component: RestaurantPostComponent;
  let fixture: ComponentFixture<RestaurantPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
