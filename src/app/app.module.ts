import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './module/product/product.module';
import { CheckoutModule } from './module/checkout/checkout.module';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './module/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
                FormsModule,
                FontAwesomeModule,
        ],
        providers: [],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
