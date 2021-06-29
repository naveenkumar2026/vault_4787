import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultcrudComponent } from './vaultcrud.component';

describe('VaultcrudComponent', () => {
  let component: VaultcrudComponent;
  let fixture: ComponentFixture<VaultcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});