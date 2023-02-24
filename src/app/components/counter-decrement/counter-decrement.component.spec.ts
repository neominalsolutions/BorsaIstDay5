import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDecrementComponent } from './counter-decrement.component';

describe('CounterDecrementComponent', () => {
  let component: CounterDecrementComponent;
  let fixture: ComponentFixture<CounterDecrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDecrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
