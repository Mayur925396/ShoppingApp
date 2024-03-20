import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './Common/auth.guard';

const routes: Routes = [
  {path:"", component:HomeBodyComponent},
  {path:"wish", component:WishlistComponent},
  {path:'cart', component:CartComponent},
  {path:'footer', component:FooterComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'productList', component:ProductListComponent},
  {path:'profile', component:ProfileComponent, canActivate:[AuthGuard]},

  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
