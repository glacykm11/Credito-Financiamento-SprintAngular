import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp04CreditoImobiliarioComponent } from './sp04-credito-imobiliario.component';

describe('Sp04CreditoImobiliarioComponent', () => {
  let component: Sp04CreditoImobiliarioComponent;
  let fixture: ComponentFixture<Sp04CreditoImobiliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp04CreditoImobiliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp04CreditoImobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
