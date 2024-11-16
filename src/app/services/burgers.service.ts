import { Injectable } from '@angular/core';
import { Burgers } from '../interfaces/burgers.model';


@Injectable({
  providedIn: 'root'
})
export class BurgersService {

  url = 'http://localhost:3000/burgers'; // URL do json-serve

  constructor() { }

  // Método para buscar todos os burger
  async getAllBurgers(): Promise<Burgers[]>{
    const response = await fetch(this.url);
    return response.json();
  }

  // Método para buscar um burger pelo ID
  async getBurgerById(id: number): Promise<Burgers | undefined>{
    const response = await fetch(`${this.url}/${id}`);
    return response.json();
  }

  // Método para adicionar um burger
  async addBurger(burger: Burgers): Promise<Burgers> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(burger)
    });
    return response.json();
  }

   // Método para atualizar um burger existente
   async updateBurger(id: number, burger: Burgers): Promise<Burgers> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(burger)
    });
    return response.json();
  }

   // Método para excluir um burger pelo ID
   async deleteBurger(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    });
  }

}
