import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './module/product/product.module';
import { CheckoutModule } from './module/checkout/checkout.module';
@NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, AppRoutingModule, ProductModule, CheckoutModule],
        providers: [],
        bootstrap: [AppComponent],
})
export class AppModule {}
