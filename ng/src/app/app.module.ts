import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgFlashMessagesModule } from "ng-flash-messages";
import { SellersComponent } from './pages/sellers/sellers.component';
import { ItemInfoComponent } from './pages/shop/item-info/item-info.component';

import { ApiService } from './services/api.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ShopService } from './services/shop.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SellersComponent,
    ItemInfoComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgFlashMessagesModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [
    ApiService,
    AuthService,
    ShopService,
    ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
