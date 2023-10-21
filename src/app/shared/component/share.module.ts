import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EyeIconComponent } from './eye-icon';
import { PlusIconComponent } from './plus-icon';
import { EditIconComponent } from './edit-icon';

const COMPONENT = [EyeIconComponent, PlusIconComponent, EditIconComponent];

@NgModule({
  declarations: [...COMPONENT],
  imports: [CommonModule],
  exports: [...COMPONENT],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
