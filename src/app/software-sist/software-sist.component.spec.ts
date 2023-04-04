import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSistComponent } from './software-sist.component';

describe('SoftwareSistComponent', () => {
  let component: SoftwareSistComponent;
  let fixture: ComponentFixture<SoftwareSistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareSistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareSistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
