import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeViewComponent} from './home-view/home-view.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductShowComponent} from './product-show/product-show.component';
import {CartComponent} from './cart/cart.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {FooterComponent} from './footer/footer.component';
import {UserShowComponent} from './user-show/user-show.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {AdminIndexComponent} from './admin-index/admin-index.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ProductListComponent,
    ProductShowComponent,
    CartComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    UserShowComponent,
    UserEditComponent,
    CategoryListComponent,
    OrderDetailsComponent,
    AdminIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
