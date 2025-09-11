import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedIcon } from './rounded-icon';

describe('RoundedIcon', () => {
  let component: RoundedIcon;
  let fixture: ComponentFixture<RoundedIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundedIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundedIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
