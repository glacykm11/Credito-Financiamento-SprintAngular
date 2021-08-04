import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp06FinanciamentoDeSmartphoneComponent } from './sp06-financiamento-de-smartphone.component';

describe('Sp06FinanciamentoDeSmartphoneComponent', () => {
  let component: Sp06FinanciamentoDeSmartphoneComponent;
  let fixture: ComponentFixture<Sp06FinanciamentoDeSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp06FinanciamentoDeSmartphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp06FinanciamentoDeSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
