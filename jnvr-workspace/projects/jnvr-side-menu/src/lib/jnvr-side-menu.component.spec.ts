import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JnvrSideMenuComponent } from './jnvr-side-menu.component';

describe('JnvrSideMenuComponent', () => {
  let component: JnvrSideMenuComponent;
  let fixture: ComponentFixture<JnvrSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JnvrSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JnvrSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
