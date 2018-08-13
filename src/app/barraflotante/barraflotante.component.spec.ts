import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraflotanteComponent } from './barraflotante.component';

describe('BarraflotanteComponent', () => {
  let component: BarraflotanteComponent;
  let fixture: ComponentFixture<BarraflotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraflotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraflotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
