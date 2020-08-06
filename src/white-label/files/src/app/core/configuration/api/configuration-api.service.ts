import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppConfiguration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationApiService {
  constructor(private http: HttpClient) {}

  fetchConfig(id: string): Observable<AppConfiguration> {
    console.log(`id: ${id}`);

    return this.http.get(`http://localhost:3000/config`, {
      headers: {
        'x-tenant': id,
      },
    });
  }
}
