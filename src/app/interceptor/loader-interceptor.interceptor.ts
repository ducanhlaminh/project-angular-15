import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../layout/components/loading/loading.service';

@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {
    constructor(private LoadingService: LoadingService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            tap((e) => {
                this.LoadingService.loading.next(true);
                if (e.type === HttpEventType.Response && e.status === 200) {
                    this.LoadingService.loading.next(false);
                }
            }),
        );
    }
}
