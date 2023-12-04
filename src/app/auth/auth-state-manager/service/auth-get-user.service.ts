import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { User } from '../../module/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUrl, BaseUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthGetUserService {


  private userSubject: Subject<User> = new Subject<User>();
  category$: Observable<User> = this.userSubject.asObservable();
  
    constructor(private http: HttpClient) { }
  
    getUser(user: User) : void {
      this.http.get<User>(`${AuthUrl}`,{
        headers : new HttpHeaders()
      })
      .pipe(
        tap(data => { data
        }),
        catchError(this.handleError<User>())
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
