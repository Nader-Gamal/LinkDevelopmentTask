import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingWeDoComponent } from './thing-we-do.component';

describe('ThingWeDoComponent', () => {
  let component: ThingWeDoComponent;
  let fixture: ComponentFixture<ThingWeDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThingWeDoComponent]
    });
    fixture = TestBed.createComponent(ThingWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
