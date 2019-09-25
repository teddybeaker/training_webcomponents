import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {ThemePalette} from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private color$$: Subject<ThemePalette> = new Subject<ThemePalette>();
  private color$: Observable<ThemePalette> = this.color$$.asObservable().pipe(shareReplay(1));

  constructor() {
    this.setColor('primary');
  }

  setColor(color: ThemePalette) {
    this.color$$.next(color);
  }

  getColor(): Observable<ThemePalette> {
    return this.color$;
  }

}
