import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { PokeAPIResponse, Pokemon, Result, SimplePokemon } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  private readonly PAGE_LIMIT = 20;

  public loadPage(page: number): Observable<SimplePokemon[]> {
    const offset = Math.max(0, (page - 1) * this.PAGE_LIMIT);

    return this.http
      .get<PokeAPIResponse>(
        `${this.BASE_URL}?offset=${offset}&limit=${this.PAGE_LIMIT}`
      )
      .pipe(
        map((resp) => this.mapToSimplePokemons(resp.results)),
        catchError((error) => {
          console.error('Error loading page:', error);
          return throwError(() => new Error('Failed to load Pokémon page'));
        })
      );
  }

  public loadPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.BASE_URL}/${id}`).pipe(
      catchError((error) => {
        console.error('Error loading Pokémon:', error);
        return throwError(() => new Error('Failed to load Pokémon'));
      })
    );
  }

  private mapToSimplePokemons(results: Result[]): SimplePokemon[] {
    return results.map((pokemon) => ({
      id: pokemon.url.split('/').at(-2) ?? '',
      name: pokemon.name,
    }));
  }
}
