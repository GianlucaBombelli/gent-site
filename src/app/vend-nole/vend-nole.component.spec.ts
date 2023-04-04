import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendNoleComponent } from './vend-nole.component';

describe('VendNoleComponent', () => {
  let component: VendNoleComponent;
  let fixture: ComponentFixture<VendNoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendNoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendNoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
