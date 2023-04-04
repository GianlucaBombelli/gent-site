import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendPageComponent } from './vend-page.component';

describe('VendPageComponent', () => {
  let component: VendPageComponent;
  let fixture: ComponentFixture<VendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
