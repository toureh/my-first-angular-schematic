import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(private http: HttpClient) {}

  performOperation(a: number, b: number, id: string) {
    return this.http.post(
      `https://b8e011083be6.ngrok.io/api/v1/corporate`,
      {
        a,
        b,
      },
      {
        headers: {
          'x-tenant': id,
        },
      }
    );
  }
}
