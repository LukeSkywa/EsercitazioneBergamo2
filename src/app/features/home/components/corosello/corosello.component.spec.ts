import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroselloComponent } from './corosello.component';

describe('CoroselloComponent', () => {
  let component: CoroselloComponent;
  let fixture: ComponentFixture<CoroselloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoroselloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoroselloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
