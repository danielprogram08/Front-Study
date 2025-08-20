import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacao(info: String) {
    console.log('Enviando para o BackEnd!');
  }
}
