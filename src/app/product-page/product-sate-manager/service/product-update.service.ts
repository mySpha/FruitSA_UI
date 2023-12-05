import { Injectable } from '@angular/core';
import { Product } from '../../model/product';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { Token } from 'src/app/auth/model/token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/auth/auth-state-manager/auth.state';
import { BaseUrl, productUrl } from 'src/environments/environment.development';
import { ProductUpdate } from '../../model/updateProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductUpdateService {

 
  private categorySubject: Subject<Product> = new Subject<Product>();
  product$: Observable<Product> = this.categorySubject.asObservable();
  accessToken!: Token | null
  
    constructor(private http: HttpClient, private store: Store) { }
    getToken(){
      this.store.select(UserState.getUser).subscribe(token =>{
        this.accessToken = token
      }); 
    }
    updateProduct(product:ProductUpdate) : void {
      this.getToken();
      this.http.put<Product>(`${BaseUrl}/${productUrl}`,product,{
        headers : new HttpHeaders({'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken?.token}`,
      })
      })
      .pipe(
        tap(data => {data}),
        catchError(this.handleError<Product>())
      )
      .subscribe(results => this.categorySubject.next(results))
    }
  
    private handleError<T>(operation = 'operation', results?: T){
      return (error: any) : Observable<T> => {
        return of(results as T);
      };
    }
  }
  

