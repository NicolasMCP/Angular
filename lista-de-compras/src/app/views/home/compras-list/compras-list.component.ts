import { Component, Input, OnInit } from '@angular/core';
import { itens } from 'src/app/model/itens';

@Component({
  selector: 'spa-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.css']
})
export class ComprasListComponent implements OnInit {

  @Input() listaDeItens: itens[];
  cont: number;

  constructor() { }

  ngOnInit(): void {
    let cont = 0;
  }

  /**
   * novoItem
   */
  public novoItem() {
    this.listaDeItens.push({ 
      nome: "Item" + (++this.cont).toString, 
      flag: ((++this.cont)%3) 
    });
    console.log("spa-compras-list FOI ACRESCENTADO UM ITEM");
  }
}
