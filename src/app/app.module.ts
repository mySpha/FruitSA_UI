import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from './category-page/module/category.module';

const routes: Routes = [
  {path: '', loadChildren:() => import('./category-page/module/category.module').then(m => m.CategoryModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
