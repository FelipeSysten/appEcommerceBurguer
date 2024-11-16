import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'http://localhost:3000/categories'; // URL do json-serve

  constructor() { }

   // Método para buscar todos os burger
   async getAllCategorias(): Promise<Categorias[]>{
    const response = await fetch(this.url);
    return response.json();
  }

    // Método para buscar um burger pelo ID
    async getCategoriaById(id: number): Promise<Categorias | undefined>{
      const response = await fetch(`${this.url}/${id}`);
      return response.json();
    }

    // Método para adicionar um burger
  async addCategoria(categoria: Categorias): Promise<Categorias> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoria)
    });
    return response.json();
  }

    // Método para atualizar um burger existente
    async updateCategoria(id: number, categoria: Categorias): Promise<Categorias> {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
      });
      return response.json();
    }

    
   // Método para excluir um burger pelo ID
   async deleteCategoria(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    });
  }

}
