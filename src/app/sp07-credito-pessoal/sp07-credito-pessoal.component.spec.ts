import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp07CreditoPessoalComponent } from './sp07-credito-pessoal.component';

describe('Sp07CreditoPessoalComponent', () => {
  let component: Sp07CreditoPessoalComponent;
  let fixture: ComponentFixture<Sp07CreditoPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp07CreditoPessoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp07CreditoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
