import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinklistInputComponent } from './thinklist-input.component';

describe('ThinklistInputComponent', () => {
  let component: ThinklistInputComponent;
  let fixture: ComponentFixture<ThinklistInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinklistInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinklistInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
