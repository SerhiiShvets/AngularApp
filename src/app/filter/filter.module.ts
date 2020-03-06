import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule],
  declarations: [FilterComponent],
  bootstrap: [FilterComponent],
  exports: [FilterComponent]
})
export class FilterModule {}
