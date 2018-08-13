import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodonarComponent } from './comodonar.component';

describe('ComodonarComponent', () => {
  let component: ComodonarComponent;
  let fixture: ComponentFixture<ComodonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComodonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComodonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
