import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
   {path:'',component:IndexComponent},
   {path:'product',component:ProductComponent},
   {path:'cart',component:CartComponent},
   {path:'contact',component:ContactComponent},
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'orders', component: OrdersComponent },
   {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
