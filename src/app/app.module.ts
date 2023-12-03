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

const routes: Routes = [
  {path: 'auth', loadChildren:() => import('./auth/module/auth.module').then(m => m.AuthModule)},
   {path: 'category', loadChildren:() => import('./category-page/module/category.module').then(m => m.CategoryModule)},
   {path: '', redirectTo: 'auth', pathMatch: 'full'},
   {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([]),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
