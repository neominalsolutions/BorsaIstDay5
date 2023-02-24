import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIncrementComponent } from './counter-increment.component';

describe('CounterIncrementComponent', () => {
  let component: CounterIncrementComponent;
  let fixture: ComponentFixture<CounterIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterIncrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
