import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SP01IntroducaoAoCreditoComponent } from './sp01-introducao-ao-credito.component';

describe('SP01IntroducaoAoCreditoComponent', () => {
  let component: SP01IntroducaoAoCreditoComponent;
  let fixture: ComponentFixture<SP01IntroducaoAoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SP01IntroducaoAoCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SP01IntroducaoAoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
