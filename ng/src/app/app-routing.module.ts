import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomepageComponent  } from './homepage/homepage.component';
import { ShopComponent  } from './pages/shop/shop.component';
import { SellersComponent  } from './pages/sellers/sellers.component';
import { LoginComponent  } from './login/login.component';
import { RegisterComponent  } from './pages/register/register.component';
import { ProfileComponent  } from './pages/profile/profile.component';
import { ItemInfoComponent  } from './pages/shop/item-info/item-info.component';
// import { BlogComponent  } from '../../blog/blog.component';
// import { ContactComponent  } from './contact/contact.component';

const routes: Routes = [
  {path:'shop', component:ShopComponent},
  {path:'sellers', component:SellersComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'iteminfo', component:ItemInfoComponent},
//   {path:'homepage', component:HomepageComponent},
  // {path:'blog', component:BlogComponent},
//   {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
