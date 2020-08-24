import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SearchTableComponent } from './search-table.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchTableComponent],
  exports: [SearchTableComponent],
  bootstrap: [SearchTableComponent]
})
export class NgbdTableCompleteModule {}