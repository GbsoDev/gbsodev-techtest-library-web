import { Autor } from "./autor";

export interface Libro {
  isbn?: number;
  titulo?: string;
  editorialId?: number;
  editorialNombre?: string;
  sinopsis?: string;
  nPaginas?: string;
  autores: Autor[];
}
