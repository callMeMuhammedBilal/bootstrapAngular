import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EyeIconComponent } from './eye-icon';
import { PlusIconComponent } from './plus-icon';
import { EditIconComponent } from './edit-icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RightSidePopupComponent } from './right-side-popup';

const COMPONENT = [
  EyeIconComponent,
  PlusIconComponent,
  EditIconComponent,
  RightSidePopupComponent,
];

@NgModule({
  declarations: [...COMPONENT],
  imports: [CommonModule, MatDialogModule],
  exports: [...COMPONENT],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
