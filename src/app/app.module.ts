import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { CategoryState } from './category-page/category-state-manager/category.state';
import { ConfirmLogoutComponent } from './auth/components/confirm-logout/confirm-logout.component';
const routes: Routes = [
  {path: 'auth', loadChildren:() => import('./auth/module/auth.module').then(m => m.AuthModule)},
   {path: 'category', loadChildren:() => import('./category-page/module/category.module').then(m => m.CategoryModule)},
   {path: 'product', loadChildren:() => import('./product-page/module/product.module').then(m => m.ProductModule)},
   {path: '', redirectTo: 'auth', pathMatch: 'full'},
   {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    ConfirmLogoutComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([]),
   // NgxsLoggerPluginModule.forRoot(), Use to  see state tree during dev
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
