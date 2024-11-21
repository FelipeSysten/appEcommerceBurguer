import { Component, OnInit } from '@angular/core';
import { Burgers } from '../../interfaces/burgers.model';
import { Categorias } from '../../interfaces/categorias.model';
import { CategoriasService } from '../../services/categorias.service';
import { BurgersService } from '../../services/burgers.service';
import { CardComponent } from "../../components/card/card.component";
import { DescriptionComponent } from "../../components/description/description.component";
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CardComponent, DescriptionComponent, ButtonComponent, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent  implements OnInit {
  categorias: Categorias[] = []; // Lista de categorias
  burgers: Burgers[] = []; // Lista de hambúrgueres
  produto: Burgers | undefined;  // Variável que armazenará os detalhes do produto selecionado


  constructor(
    private categoriaService: CategoriasService,
    private burgersService: BurgersService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadBurgers();
  }
  
 // Método para carregar todos os hambúrgueres
 async loadBurgers(): Promise<void> {
  try {
    this.burgers = await this.burgersService.getAllBurgers();
  } catch (error) {
    console.error('Erro ao carregar os hambúrgueres:', error);
  }
}

  // Método de navegação para redirecionar para outras rotas
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);  // Navega para a rota especificada
  }
}
