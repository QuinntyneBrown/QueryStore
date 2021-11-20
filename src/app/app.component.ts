import { Component, Injectable } from '@angular/core';
import { Store } from '../app/@core/store/store';

import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';


@Injectable()
class AppStore extends Store {
  public get() {
    return super.from$(() => of(Date()),"DATE");
  }

  public refresh() {
    return super.withRefresh(of(true),["DATE"]);
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
  constructor(private readonly _appStore: AppStore) {}

  public title1$: any = of(true).pipe(delay(1000),switchMap(_ => this._appStore.get()));

  public title2$: any = of(true).pipe(delay(2000),switchMap(_ => this._appStore.get()));

  public title3$: any = of(true).pipe(delay(3000),switchMap(_ => this._appStore.get()));

  // public title1$: any = of(true).pipe(delay(1000),switchMap(_ => of(Date())));

  // public title2$: any = of(true).pipe(delay(2000),switchMap(_ => of(Date())));

  // public title3$: any = of(true).pipe(delay(3000),switchMap(_ => of(Date())));

  public refresh() {
    this._appStore.refresh().subscribe();
  }
}
