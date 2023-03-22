import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartServiceService } from '../module/cart/cart-service.service';
import { UseServiceService } from '../module/user/use-service.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
        constructor(private CartService: CartServiceService, private UserService: UseServiceService) {}

        intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
                const token = localStorage.getItem('token');
                if (token) {
                        request = request.clone({
                                setHeaders: { Authorization: token },
                        });
                }
                return next.handle(request);
        }
}
