import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../../services/burgers.service';
import { Burgers } from '../../interfaces/burgers.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent  implements OnInit {
  burgers: Burgers[] = []; // Array para armazenar os burgers

  constructor(private burgersService: BurgersService) {}

  ngOnInit(): void {
    this.loadBurgers(); // Carrega os burgers ao iniciar o componente
  }

  // Método para carregar todos os burgers
  async loadBurgers(): Promise<void> {
    try {
      this.burgers = await this.burgersService.getAllBurgers();
    } catch (error) {
      console.error('Erro ao carregar os burgers:', error);
    }
  }

}
