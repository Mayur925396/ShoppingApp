import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HostDirective } from './Common/host.directive';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeBodyComponent,
    CartComponent,
    RegistrationComponent,
    LoginComponent,
    WishlistComponent,
    FooterComponent,
    ProductListComponent,
    HostDirective,
    ProfileComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginatorModule,
    ImageModule,
    ChipModule,
    RippleModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
