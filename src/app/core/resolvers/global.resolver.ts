import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalResolver implements Resolve<any> {
  constructor(private loadingService: LoadingService) {}

  resolve(): Observable<any> {
    this.loadingService.showLoading(); 
    return new Observable(observer => {
        observer.next(null); 
        observer.complete();
    }).pipe(finalize(() => this.loadingService.hideLoading()));
  }
}
