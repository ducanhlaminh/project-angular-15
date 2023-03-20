import { NgModule, CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
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
import { PriceProductPipe } from './module/product/price-product.pipe';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducer/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
        declarations: [AppComponent],
        imports: [
                BrowserModule,
                StoreModule.forRoot({ loading: appReducer }),
                CartModule,
                AppRoutingModule,
                ProductModule,
                CheckoutModule,
                LayoutModule,
                UserModule,
                HttpClientModule,
                FormsModule,
                FontAwesomeModule,
                StoreDevtoolsModule.instrument({
                        maxAge: 25, // Retains last 25 states
                        logOnly: !isDevMode(), // Restrict extension to log-only mode
                        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
                        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
                        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
                }),
        ],
        providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
