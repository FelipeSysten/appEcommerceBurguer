import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  @Input() title = ''; // Simplificado sem o tipo explícito, TypeScript infere como string
  @Input() text = ''; // O mesmo para 'text'
}
