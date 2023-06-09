import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafProdComponent } from './graf-prod.component';

describe('GrafProdComponent', () => {
  let component: GrafProdComponent;
  let fixture: ComponentFixture<GrafProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
