import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarItem } from './avatar-item';

describe('AvatarItem', () => {
  let component: AvatarItem;
  let fixture: ComponentFixture<AvatarItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
