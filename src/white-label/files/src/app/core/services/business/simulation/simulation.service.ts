import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SimulationRequest } from 'src/app/shared/models/simulation-request';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor(private http: HttpClient) {}

  doSimulation(request: SimulationRequest, id: string): Observable<any> {
    /*     return of({
      method: 'Price',
      amountFinanced: 30000,
      installment: 2750.3997871868837,
      quantity: 12,
      itens: [
        {
          number: 1,
          installment: 2750.3997871868837,
          amortization: 2300.3997871868837,
          tax: 450,
          outstandingBalance: 27699.600212813115,
        },
        {
          number: 2,
          installment: 2750.3997871868837,
          amortization: 2334.905783994687,
          tax: 415.4940031921967,
          outstandingBalance: 25364.694428818428,
        },
        {
          number: 3,
          installment: 2750.3997871868837,
          amortization: 2369.929370754607,
          tax: 380.4704164322764,
          outstandingBalance: 22994.765058063822,
        },
        {
          number: 4,
          installment: 2750.3997871868837,
          amortization: 2405.4783113159265,
          tax: 344.9214758709573,
          outstandingBalance: 20589.286746747894,
        },
        {
          number: 5,
          installment: 2750.3997871868837,
          amortization: 2441.5604859856653,
          tax: 308.8393012012184,
          outstandingBalance: 18147.72626076223,
        },
        {
          number: 6,
          installment: 2750.3997871868837,
          amortization: 2478.1838932754504,
          tax: 272.2158939114334,
          outstandingBalance: 15669.542367486778,
        },
        {
          number: 7,
          installment: 2750.3997871868837,
          amortization: 2515.3566516745823,
          tax: 235.04313551230166,
          outstandingBalance: 13154.185715812197,
        },
        {
          number: 8,
          installment: 2750.3997871868837,
          amortization: 2553.087001449701,
          tax: 197.31278573718294,
          outstandingBalance: 10601.098714362495,
        },
        {
          number: 9,
          installment: 2750.3997871868837,
          amortization: 2591.3833064714463,
          tax: 159.0164807154374,
          outstandingBalance: 8009.715407891049,
        },
        {
          number: 10,
          installment: 2750.3997871868837,
          amortization: 2630.254056068518,
          tax: 120.14573111836573,
          outstandingBalance: 5379.461351822531,
        },
        {
          number: 11,
          installment: 2750.3997871868837,
          amortization: 2669.707866909546,
          tax: 80.69192027733796,
          outstandingBalance: 2709.7534849129847,
        },
        {
          number: 12,
          installment: 2750.3997871868837,
          amortization: 2709.753484913189,
          tax: 40.64630227369477,
          outstandingBalance: -2.041815605480224e-10,
        },
      ],
    }); */

    return this.http.post(
      `https://b8e011083be6.ngrok.io/api/v1/corporate/prospect`,
      {
        name: request.name,
        cpf: request.cpf,
        email: request.email,
        loanAmount: request.loanAmount,
        quantity: request.quantity,
      },
      {
        headers: {
          'x-tenant': id,
        },
      }
    );
  }
}
