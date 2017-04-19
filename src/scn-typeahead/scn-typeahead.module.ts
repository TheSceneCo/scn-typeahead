import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScnTypeaheadComponent } from './scn-typeahead.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [ScnTypeaheadComponent],
  exports: [ScnTypeaheadComponent]
})
export class ScnTypeaheadModule {
}
