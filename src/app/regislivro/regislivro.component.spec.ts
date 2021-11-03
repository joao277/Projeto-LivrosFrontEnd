import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegislivroComponent } from './regislivro.component';

describe('RegislivroComponent', () => {
  let component: RegislivroComponent;
  let fixture: ComponentFixture<RegislivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegislivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegislivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
