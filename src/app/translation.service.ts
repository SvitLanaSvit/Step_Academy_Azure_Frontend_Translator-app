import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private serverUrl = 'http://localhost:3000/translate';

  constructor(private http: HttpClient) { }

  translateText(text: string, from: string, to: string): Observable<any>{
    const data = {
      text,
      from,
      to
    };
    return this.http.post<any>(this.serverUrl, data);
  }
}
