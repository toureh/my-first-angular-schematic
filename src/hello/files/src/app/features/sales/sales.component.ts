import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/core/configuration/configuration.service';
import { OperationService } from 'src/app/core/services/business/operation.service';
import { SimulationService } from 'src/app/core/services/business/simulation/simulation.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  simulationResult: any;
  name: string;
  cpf: string;
  email: string;
  loanAmount: number;
  installments: number;
  id: string;
  isLoadingSimulation: boolean;

  constructor(
    private simulationService: SimulationService,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit(): void {
    this.id = this.configurationService.tenantId;
  }

  onSubmit() {
    console.log(`name: ${this.name}`);
    console.log(`cpf: ${this.cpf}`);
    console.log(`id: ${this.id}`);
    console.log(`loanAmount: ${this.loanAmount}`);
    console.log(`quantity: ${this.installments}`);
    this.isLoadingSimulation = true;

    this.simulationService
      .doSimulation(
        {
          name: this.name,
          cpf: this.cpf,
          email: this.email,
          loanAmount: this.loanAmount,
          quantity: this.installments,
        },
        this.id
      )
      .subscribe((data: any) => {
        console.log(`data: ${JSON.stringify(data)}`);
        this.simulationResult = data;
        this.isLoadingSimulation = false;
      });
  }
}
