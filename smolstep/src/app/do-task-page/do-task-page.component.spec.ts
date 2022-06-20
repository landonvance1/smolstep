import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoTaskPageComponent } from './do-task-page.component';

describe('DoTaskPageComponent', () => {
  let component: DoTaskPageComponent;
  let fixture: ComponentFixture<DoTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoTaskPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
