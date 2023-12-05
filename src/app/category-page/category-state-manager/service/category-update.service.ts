import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../model/category';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { Token } from 'src/app/auth/model/token';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/auth/auth-state-manager/auth.state';
import { BaseUrl, categoryUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryUpdateService {

  private categorySubject: Subject<Category> = new Subject<Category>();
  category$: Observable<Category> = this.categorySubject.asObservable();
  accessToken!: Token | null
  
    constructor(private http: HttpClient, private store: Store) { }
    getToken(){
      this.store.select(UserState.getUser).subscribe(token =>{
        this.accessToken = token
      }); 
    }
    updateCategory(category:Category) : void {
      this.getToken();
      console.log(this.accessToken)
      this.http.put<Category>(`${BaseUrl}/${categoryUrl}`,category,{
        headers : new HttpHeaders({'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken?.token}`,
      })
      })
      .pipe(
        tap(data => {data}),
        catchError(this.handleError<Category>())
      )
      .subscribe(results => this.categorySubject.next(results))
    }
  
    private handleError<T>(operation = 'operation', results?: T){
      return (error: any) : Observable<T> => {
        return of(results as T);
      };
    }
  }
  

