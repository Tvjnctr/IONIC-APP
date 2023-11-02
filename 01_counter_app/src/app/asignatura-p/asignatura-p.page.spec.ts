import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaPPage } from './asignatura-p.page';

describe('AsignaturaPPage', () => {
  let component: AsignaturaPPage;
  let fixture: ComponentFixture<AsignaturaPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignaturaPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
