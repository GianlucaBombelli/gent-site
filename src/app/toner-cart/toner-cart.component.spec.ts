import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerCartComponent } from './toner-cart.component';

describe('TonerCartComponent', () => {
  let component: TonerCartComponent;
  let fixture: ComponentFixture<TonerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
