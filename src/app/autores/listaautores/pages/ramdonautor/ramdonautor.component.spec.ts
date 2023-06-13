import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamdonautorComponent } from './ramdonautor.component';

describe('RamdonautorComponent', () => {
  let component: RamdonautorComponent;
  let fixture: ComponentFixture<RamdonautorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamdonautorComponent]
    });
    fixture = TestBed.createComponent(RamdonautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
