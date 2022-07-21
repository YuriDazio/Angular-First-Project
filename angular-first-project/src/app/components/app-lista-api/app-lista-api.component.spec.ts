import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListaApiComponent } from './app-lista-api.component';

describe('AppListaApiComponent', () => {
  let component: AppListaApiComponent;
  let fixture: ComponentFixture<AppListaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListaApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppListaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
