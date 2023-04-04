import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafPageComponent } from './graf-page.component';

describe('GrafPageComponent', () => {
  let component: GrafPageComponent;
  let fixture: ComponentFixture<GrafPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
