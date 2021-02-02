import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpClientService {

  httpOptions: {
    headers: HttpHeaders
  } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private readonly http: HttpClient) { }

  getPokemon: (url: string) => Observable<PokemonApiDTO> = (url: string): Observable<PokemonApiDTO> => {
      return this.http
      .get<PokemonApiDTO>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}

export interface PokemonApiDTO {
  count: Number,
  next: String,
  previous: any,
  results: Array<PokemonResultDTO>
}

export interface PokemonResultDTO {
  name: String,
  url: String
}
