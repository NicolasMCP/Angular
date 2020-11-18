import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { itens } from 'src/app/model/itens';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listaItens: itens[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listaItens = [
      { nome: "Bananas", flag: 1 },
      { nome: "Laranjas", flag: 1 },
      { nome: "Maças", flag: 3 },
      { nome: "Chocolate", flag: 2 },
      { nome: "Leite", flag: 1 }
    ];
  }

  /**
   * name
   */
  public novoItem(): itens[] {
    return [{ nome: "Bananas", flag: 1 }]
  }
}
