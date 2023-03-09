import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './module/product/product.module';
import { CheckoutModule } from './module/checkout/checkout.module';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './module/user/user.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
        declarations: [AppComponent],
        imports: [
                BrowserModule,
                AppRoutingModule,
                ProductModule,
                CheckoutModule,
                LayoutModule,
                UserModule,
                HttpClientModule,
        ],
        providers: [],
        bootstrap: [AppComponent],
})
export class AppModule {}
