import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { POKEMON_SPRITE_BASE_URL } from '../../app.config';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
  selector: 'app-pokemon-page',
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  public pokemon = signal<Pokemon | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.pokemonsService
      .loadPokemon(id)
      .pipe(tap((pokemon) => this.updateMetaTags(pokemon)))
      .subscribe(this.pokemon.set);
  }

  private updateMetaTags(pokemon: Pokemon): void {
    const pageTitle = `#${pokemon.id} - ${pokemon.name}`;
    const pageDescription = `Página del Pokémon ${pokemon.name}`;

    this.title.setTitle(pageTitle);
    const tags = [
      { name: 'description', content: pageDescription },
      { name: 'og:title', content: pageTitle },
      { name: 'og:description', content: pageDescription },
      {
        name: 'og:image',
        content: `${POKEMON_SPRITE_BASE_URL}${pokemon.id}.png`,
      },
    ];

    tags.forEach((tag) =>
      this.meta.updateTag({ name: tag.name, content: tag.content })
    );
  }
}
