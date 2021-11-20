import { Component, Injectable } from '@angular/core';
import { Store } from '@core/store/store';
import { of } from 'rxjs';


@Injectable()
class AppStore extends Store {
  public get() {
    return super.from$(() => of("Query Store"));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AppStore
  ]
})
export class AppComponent {
  constructor(
    private readonly _appStore: AppStore
  ) {

  }

  public appName$ = this._appStore.get();


}
