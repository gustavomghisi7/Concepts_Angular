import { Injectable } from '@angular/core';
// importando o model para que o service faça uso
import { Produto } from './product';

@Injectable()

export class ProductService {
  //constructor() { }

  // criando a função
  public getProdutos(){

    // estabelecer a propriedade para criar a coleção de dados
    let produtos: Produto[]

    // criação de conjunto de dados - lista de produtos
    produtos = [
      new Produto(1, 'Quadro Baby Yoda', 199),
      new Produto(2, 'Mascara Darth Vader', 159),
      new Produto(3, 'LightSaber', 89)
    ]
    return produtos
  }
}
