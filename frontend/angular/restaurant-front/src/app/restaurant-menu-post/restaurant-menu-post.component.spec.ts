import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuPostComponent } from './restaurant-menu-post.component';

describe('RestaurantMenuPostComponent', () => {
  let component: RestaurantMenuPostComponent;
  let fixture: ComponentFixture<RestaurantMenuPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
