import { Autor } from "./autor";

export interface Libro {
  Id?: number;
  titulo: string;
  editorialId: number;
  sinopsis: string;
  nPaginas: string;
  autores: Autor[];
}
