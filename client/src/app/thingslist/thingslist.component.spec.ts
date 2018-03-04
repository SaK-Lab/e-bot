import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingslistComponent } from './thingslist.component';

describe('ThingslistComponent', () => {
  let component: ThingslistComponent;
  let fixture: ComponentFixture<ThingslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
