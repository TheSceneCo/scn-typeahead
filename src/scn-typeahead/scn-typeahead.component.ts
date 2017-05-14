import { Component, OnInit, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ScnTypeaheadComponent),
  multi: true
};


@Component({
  selector: 'scn-typeahead',
  templateUrl: './scn-typeahead.component.html',
  styleUrls: ['./scn-typeahead.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class ScnTypeaheadComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() dataSource: Observable<any>;
  @Input() typeaheadOptionField: string;
  @Input() typeaheadOptionsLimit: string;

  @Output() typeaheadOnSelect: EventEmitter<TypeaheadMatch> = new EventEmitter();

  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;

  _typeaheadValue: any;

  get typeaheadValue(): any {
    return this._typeaheadValue;
  };

  set typeaheadValue(v: any) {

    if (v !== this._typeaheadValue) {

      this._typeaheadValue = v;
      this.onChangeCallback(v);
    }
  }

  private onChangeCallback: (_: any) => void = noop;

  public writeValue(value: any): void {
    if (value !== this._typeaheadValue) {
      this._typeaheadValue = value;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  constructor() {
  }

  ngOnInit() {
  }

  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  public changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  public _typeaheadOnSelect(e: TypeaheadMatch): void {
    this.typeaheadOnSelect.emit(e);
  }
}
