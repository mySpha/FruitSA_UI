import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { User } from '../../module/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl, registerUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthAddUserService {


  private userSubject: Subject<string> = new Subject<string>();
  user$: Observable<string> = this.userSubject.asObservable();
  
    constructor(private http: HttpClient) { }
  
    getUser(user: User) : void {
      this.http.post<string>(`${BaseUrl}/${registerUrl}`,user,{
        headers : new HttpHeaders()
      })
      .pipe(
        tap(data => { data
        }),
        catchError(this.handleError<string>())
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

