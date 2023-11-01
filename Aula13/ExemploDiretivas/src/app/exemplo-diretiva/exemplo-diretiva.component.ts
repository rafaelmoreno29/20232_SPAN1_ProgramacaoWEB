import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-diretiva',
  templateUrl: './exemplo-diretiva.component.html',
  styleUrls: ['./exemplo-diretiva.component.css'],
})
export class ExemploDiretivaComponent implements OnInit {
  listaPessoa: any = [
    { id: 1, nome: 'Rafael', cidade: 'Sorocaba' },
    { id: 2, nome: 'Maria', cidade: 'Votorantim' },
    { id: 3, nome: 'Raquel', cidade: 'Sorocaba' },
    { id: 4, nome: 'João', cidade: 'Votorantim' },
    { id: 5, nome: 'José', cidade: 'Sorocaba' },
  ];
  mostrarTabela: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
