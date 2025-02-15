import { Component } from '@angular/core';
import { Celular } from '../types/celulares';

@Component({
  selector: 'app-renderizando-listas',
  standalone: false,
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})

export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: 'moto g', descricao:'celular domestico', esgotado: false},
    {id: 1, nome: 'moto xl', descricao:'celular domestico', esgotado: false},
    {id: 1, nome: 'moto ls', descricao:'celular domestico', esgotado: false},
    {id: 1, nome: 'moto e7', descricao:'celular domestico', esgotado: false},
  ]
}
