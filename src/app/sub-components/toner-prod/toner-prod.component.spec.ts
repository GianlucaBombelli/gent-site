import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerProdComponent } from './toner-prod.component';

describe('TonerProdComponent', () => {
  let component: TonerProdComponent;
  let fixture: ComponentFixture<TonerProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
