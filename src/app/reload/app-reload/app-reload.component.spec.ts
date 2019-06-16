import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReloadComponent } from './app-reload.component';

describe('AppReloadComponent', () => {
  let component: AppReloadComponent;
  let fixture: ComponentFixture<AppReloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
