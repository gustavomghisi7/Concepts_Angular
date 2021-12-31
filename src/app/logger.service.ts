import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {
  // criar a função para - após a injeção de dependencia - ser acessada dentro de product.service
  testando(mensagem:any){
    console.log(mensagem)
  }
}
