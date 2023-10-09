import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNotacComponent } from './crear-notac.component';

describe('CrearNotacComponent', () => {
  let component: CrearNotacComponent;
  let fixture: ComponentFixture<CrearNotacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearNotacComponent]
    });
    fixture = TestBed.createComponent(CrearNotacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
