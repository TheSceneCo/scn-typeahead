import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap';


@Component({
  selector: 'scn-typeahead',
  templateUrl: './scn-typeahead.component.html',
  styleUrls: ['./scn-typeahead.component.scss']
})
export class ScnTypeaheadComponent implements OnInit {
  @Input() placeholder: string;
  @Input() dataSource: Observable<any>;
  @Input() typeaheadOptionField: string;
  @Input() typeaheadOptionsLimit: string;

  @Output() typeaheadOnSelect: EventEmitter<TypeaheadMatch> = new EventEmitter();

  public asyncSelected: string;
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;

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
