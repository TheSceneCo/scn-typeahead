import { Component } from '@angular/core';
import { RestService, RestConfig } from '@thescene/thescene-api-library';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

export class MyRestConfig extends RestConfig {
  clientId = environment.scnApiLibrary.clientId;
  secret = environment.scnApiLibrary.secret;
}

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    RestService.setCredentials(new MyRestConfig());
  }
}
