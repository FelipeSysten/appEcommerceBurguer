import { Categorias } from "./categorias.model";

export interface Burgers {
    id: number;               // Identificador único
    name: string;             // Nome do hambúrguer
    ingredients: string[];    // Lista de ingredientes
    description_text: string;
    image: string;            // URL da imagem do hambúrguer
    price: number;            // Preço do hambúrguer
    categoryId:number;
    category: Categorias;  // Relacionamento com a categoria
  }
  