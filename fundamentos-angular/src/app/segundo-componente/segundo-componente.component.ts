import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  standalone: false,
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome="joao";
}
