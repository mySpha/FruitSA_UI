import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { Category } from '../../model/category';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BaseUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryGetService {

private categorySubject: Subject<Category[]> = new Subject<Category[]>();
category$: Observable<Category[]> = this.categorySubject.asObservable();

  constructor(private http: HttpClient) { }

  getCategory() : void {
    this.http.get<Category[]>(`${BaseUrl}`,{
      headers : new HttpHeaders()
    })
    .pipe(
      tap(data => {data
      console.log(data)}),
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
