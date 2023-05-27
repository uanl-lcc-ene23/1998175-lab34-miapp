import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadetallesComponent } from './vistadetalles.component';

describe('VistadetallesComponent', () => {
  let component: VistadetallesComponent;
  let fixture: ComponentFixture<VistadetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistadetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
