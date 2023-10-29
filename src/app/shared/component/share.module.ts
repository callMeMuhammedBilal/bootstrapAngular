import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EyeIconComponent } from './eye-icon';
import { PlusIconComponent } from './plus-icon';
import { EditIconComponent } from './edit-icon';
import { RightSidePopupComponent } from './popup';
import { MatDialogModule } from '@angular/material/dialog';

const POPUP = [RightSidePopupComponent];
const COMPONENT = [EyeIconComponent, PlusIconComponent, EditIconComponent];

@NgModule({
  declarations: [...COMPONENT, ...POPUP],
  imports: [CommonModule, MatDialogModule],
  exports: [...COMPONENT, ...POPUP, MatDialogModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
