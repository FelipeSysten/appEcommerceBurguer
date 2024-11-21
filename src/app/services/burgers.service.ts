import { Injectable } from '@angular/core';
import { Burgers } from '../interfaces/burgers.model';

@Injectable({
  providedIn: 'root',
})
export class BurgersService {
  url = 'http://localhost:3000/burgers'; // URL do JSON Server

  constructor() {}

  async getAllBurgers(): Promise<Burgers[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      console.error(`Erro ao buscar todos os hambúrgueres: ${response.statusText}`);
      return [];
    }
    return response.json();
  }

  async getBurgerById(id: number): Promise<Burgers | null> {
    const response = await fetch(`${this.url}/${id}`);
    if (!response.ok) {
      console.warn(`Hambúrguer com ID ${id} não encontrado.`);
      return null;
    }
    return response.json();
  }

  async addBurger(burger: Burgers): Promise<Burgers | null> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(burger),
    });

    if (!response.ok) {
      console.error(`Erro ao adicionar hambúrguer: ${response.statusText}`);
      return null;
    }
    return response.json();
  }

  async updateBurger(id: number, burger: Burgers): Promise<Burgers | null> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(burger),
    });

    if (!response.ok) {
      console.error(`Erro ao atualizar hambúrguer com ID ${id}: ${response.statusText}`);
      return null;
    }
    return response.json();
  }

  async deleteBurger(id: number): Promise<boolean> {
    const response = await fetch(`${this.url}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      console.error(`Erro ao excluir hambúrguer com ID ${id}: ${response.statusText}`);
      return false;
    }
    return true;
  }
}
