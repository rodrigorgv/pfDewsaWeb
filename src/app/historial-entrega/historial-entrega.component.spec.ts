import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEntregaComponent } from './historial-entrega.component';

describe('HistorialEntregaComponent', () => {
  let component: HistorialEntregaComponent;
  let fixture: ComponentFixture<HistorialEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialEntregaComponent]
    });
    fixture = TestBed.createComponent(HistorialEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
