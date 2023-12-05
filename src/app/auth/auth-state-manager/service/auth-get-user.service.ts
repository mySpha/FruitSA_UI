import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { User } from '../../module/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUrl, BaseUrl, loginUrl } from 'src/environments/environment.development';
import { Token } from '../../model/token';

@Injectable({
  providedIn: 'root'
})
export class AuthGetUserService {


  private userSubject: Subject<Token> = new Subject<Token>();
  user$: Observable<Token> = this.userSubject.asObservable();
  
    constructor(private http: HttpClient) { }
  
    getUser(user: User) : void {
      this.http.post<Token>(`${BaseUrl}/${loginUrl}`,user,{
        headers : new HttpHeaders()
      })
      .pipe(
        tap(data => { data
        }),
        catchError(this.handleError<Token>())
      )
      .subscribe(results => this.userSubject.next(results))
    }
  
    private handleError<T>(operation = 'operation', results?: T){
      return (error: any) : Observable<T> => {
        console.error(error);
        return of(results as T);
      };
    }
}
