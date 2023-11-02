import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaP1Page } from './asignatura-p1.page';

describe('AsignaturaP1Page', () => {
  let component: AsignaturaP1Page;
  let fixture: ComponentFixture<AsignaturaP1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignaturaP1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
