import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titans } from './titans';

describe('Titans', () => {
  let component: Titans;
  let fixture: ComponentFixture<Titans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titans],
    }).compileComponents();

    fixture = TestBed.createComponent(Titans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
