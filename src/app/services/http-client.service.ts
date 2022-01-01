import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Post } from '../models/post';
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor( private httpClient: HttpClient ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

}
