import { Autor } from "./autor";

export interface Libro {
  isbn: number;
  titulo: string;
  editorialId: number;
  sinopsis: string;
  nPaginas: string;
  autores: Autor[];
}
