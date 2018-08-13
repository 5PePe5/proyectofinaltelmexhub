import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyecComponent } from './proyec.component';

describe('ProyecComponent', () => {
  let component: ProyecComponent;
  let fixture: ComponentFixture<ProyecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
