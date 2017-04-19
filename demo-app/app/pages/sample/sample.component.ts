import { Component, OnInit } from '@angular/core';
import { TagsRequest, ProfileType, TagsService } from '@thescene/thescene-api-library';
import { Observable } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  public asyncSelected: string;
  public dataSource: Observable<any>;
  service: TagsService = new TagsService();

  constructor() {
    this.setDataSource();
  }

  ngOnInit() {
  }

  setDataSource() {
    this.dataSource = Observable
        .create((observer: any) => {
          // Runs on every search
          observer.next(this.asyncSelected);
        })
        .mergeMap((token: string) => {
          return this.getData(token);
        });
  }

  getData(token): Observable<any> {
    let tagsRequest: TagsRequest = new TagsRequest();
    tagsRequest.profileType = ProfileType.EVENTS;
    tagsRequest.name = token;

    return this.service.getAllTags(tagsRequest).map(res => {
      if (res._embedded && res._embedded.tags) {
        return res._embedded.tags;
      }

      return [];
    });
  }

  typeaheadOnSelect(e: TypeaheadMatch) {
    console.log('Selected value: ', e.value);
  }

}
