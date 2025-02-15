import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  standalone: false,
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})

export class SegundoComponenteComponent {
  nome="Joao";
  dataNascimento = "1992/03/10";
  urlImg = "/assets/SaoAquino.jpg";

  mostrarDataNascimento() {
    alert(`Data de nascimento é: ${this.dataNascimento}`);
  }
}