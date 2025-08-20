import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private enviaFormularioService = inject(EnviaFormularioService);

  name = 'Daniel';
  idButton = '1';

  listItems = ["feijão", "arroz", " e batataa"];

  deveMostrarTexto = true;

  // atualizaBoleano(valor: boolean){
    //this.meuBooleano = valor;
  //}

  submit() {
    console.log('Você clicou!');
  }

  Submit() { this.enviaFormularioService.enviaInformacao("Enviando Informação!"); }

  Event(event: any) {
    console.log('Algo aconteceu!');
  }

  @Input("name") minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<String>();

  SUBMIT() {
    this.emitindoValorName.emit(this.name);
  }

}