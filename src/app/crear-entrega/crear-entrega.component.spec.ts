import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEntregaComponent } from './crear-entrega.component';

describe('CrearEntregaComponent', () => {
  let component: CrearEntregaComponent;
  let fixture: ComponentFixture<CrearEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearEntregaComponent]
    });
    fixture = TestBed.createComponent(CrearEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
