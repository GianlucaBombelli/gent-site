import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendProdComponent } from './vend-prod.component';

describe('VendProdComponent', () => {
  let component: VendProdComponent;
  let fixture: ComponentFixture<VendProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
