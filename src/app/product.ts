// criando o model domain
export class Produto {
    constructor(idProduto: number, nomeProduto: string, precoProduto: number) {
        this.idProduto = idProduto
        this.nomeProduto = nomeProduto
        this.precoProduto = precoProduto
    }
    
    //disponibilzando as propriedades inicializadas
    idProduto: number
    nomeProduto: string
    precoProduto: number
}

