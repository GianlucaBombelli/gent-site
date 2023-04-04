import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafPersComponent } from './graf-pers.component';

describe('GrafPersComponent', () => {
  let component: GrafPersComponent;
  let fixture: ComponentFixture<GrafPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafPersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
