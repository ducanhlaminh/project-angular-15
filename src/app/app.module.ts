import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './module/product/product.module';
import { CheckoutModule } from './module/checkout/checkout.module';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './module/user/user.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpInterceptorInterceptor } from './interceptor/http-interceptor.interceptor';
import { CartModule } from './module/cart/cart.module';
@NgModule({
        declarations: [AppComponent],
        imports: [
                BrowserModule,
                CartModule,
                AppRoutingModule,
                ProductModule,
                CheckoutModule,
                LayoutModule,
                UserModule,
                HttpClientModule,
                FormsModule,
                FontAwesomeModule,
        ],
        providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
