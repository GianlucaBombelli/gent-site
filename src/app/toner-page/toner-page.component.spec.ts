import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerPageComponent } from './toner-page.component';

describe('TonerPageComponent', () => {
  let component: TonerPageComponent;
  let fixture: ComponentFixture<TonerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
