import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powers } from './powers';

describe('Powers', () => {
  let component: Powers;
  let fixture: ComponentFixture<Powers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Powers],
    }).compileComponents();

    fixture = TestBed.createComponent(Powers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
