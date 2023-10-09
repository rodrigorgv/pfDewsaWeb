import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEntregaComponent } from './consulta-entrega.component';

describe('ConsultaEntregaComponent', () => {
  let component: ConsultaEntregaComponent;
  let fixture: ComponentFixture<ConsultaEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaEntregaComponent]
    });
    fixture = TestBed.createComponent(ConsultaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
