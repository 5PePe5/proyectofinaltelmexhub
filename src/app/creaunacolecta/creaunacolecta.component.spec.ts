import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaunacolectaComponent } from './creaunacolecta.component';

describe('CreaunacolectaComponent', () => {
  let component: CreaunacolectaComponent;
  let fixture: ComponentFixture<CreaunacolectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaunacolectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaunacolectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
