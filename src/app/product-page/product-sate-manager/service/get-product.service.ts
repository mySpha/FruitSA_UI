import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { Token } from 'src/app/auth/model/token';
import { Product } from '../../model/product';
import { UserState } from 'src/app/auth/auth-state-manager/auth.state';
import { BaseUrl, productUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {


  private pruductSubject: Subject<Product[]> = new Subject<Product[]>();
  products$: Observable<Product[]> = this.pruductSubject.asObservable();
  accessToken!: Token | null
  
    constructor(private http: HttpClient, private store: Store) { }
    getToken(){
      this.store.select(UserState.getUser).subscribe(token =>{
        this.accessToken = token
      });
    }
    getProducts() : void {
      this.getToken();
      this.http.get<Product[]>(`${BaseUrl}/${productUrl}`,{
        headers : new HttpHeaders({'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken?.token}`,
      })
      })
      .pipe(
        tap(data => {data}),
        catchError(this.handleError<Product[]>())
      )
      .subscribe(results => this.pruductSubject.next(results))
    }
  
    private handleError<T>(operation = 'operation', results?: T){
      return (error: any) : Observable<T> => {
        console.error(error);
        return of(results as T);
      };
    }
}
