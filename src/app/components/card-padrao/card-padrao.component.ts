import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-padrao',
  standalone: true,
  imports: [],
  templateUrl: './card-padrao.component.html',
  styleUrl: './card-padrao.component.css'
})
export class CardPadraoComponent {

  // Variáveis de entrada para o componente, com valores padrões
  @Input() title: string = ''; 
  @Input() description: string = ''; 
  @Input() descriptionText: string = ''; // Alteração no nome para seguir o padrão camelCase
  @Input() imageUrl: string = ''; 
  @Input() price: string = ''; // Removido o "?" e definido um valor padrão, simplificando

}
