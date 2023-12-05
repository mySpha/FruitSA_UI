import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { Category } from '../../model/category';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BaseUrl, categoryUrl, environment } from 'src/environments/environment.development';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/auth/auth-state-manager/auth.state';
import { Token } from 'src/app/auth/model/token';

@Injectable({
  providedIn: 'root'
})
export class CategoryGetService {

private categorySubject: Subject<Category[]> = new Subject<Category[]>();
category$: Observable<Category[]> = this.categorySubject.asObservable();
accessToken!: Token | null

  constructor(private http: HttpClient, private store: Store) { }
  getToken(){
    this.store.select(UserState.getUser).subscribe(token =>{
      this.accessToken = token
    });
  }
  getCategory() : void {
    this.getToken();
    this.http.get<Category[]>(`${BaseUrl}/${categoryUrl}`,{
      headers : new HttpHeaders({'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken?.token}`,
    })
    })
    .pipe(
      tap(data => {data}),
      catchError(this.handleError<Category[]>())
    )
    .subscribe(results => this.categorySubject.next(results))
  }

  private handleError<T>(operation = 'operation', results?: T){
    return (error: any) : Observable<T> => {
      console.error(error);
      return of(results as T);
    };
  }
}
