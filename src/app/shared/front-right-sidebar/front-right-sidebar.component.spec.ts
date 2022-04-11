import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRightSidebarComponent } from './front-right-sidebar.component';

describe('FrontRightSidebarComponent', () => {
  let component: FrontRightSidebarComponent;
  let fixture: ComponentFixture<FrontRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontRightSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
